import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { getUserId, refreshWishlistProducts, emptyProductsResponse, mergeWishlists } from '../../helpers';
import {
  BIGCOMMERCE_LOAD_WISHLIST_FAILED,
  BIGCOMMERCE_GUEST_WISHLIST_KEY
} from '../../helpers/consts';

export const load: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['load'] = async (
  context: Context
) => {
  const customerId = getUserId(context);

  if (!customerId) {
    throw new Error(BIGCOMMERCE_LOAD_WISHLIST_FAILED);
  }

  const { data: customerWishlists } = await context.$bigcommerce.api
    .getAllWishlists({ customer_id: customerId });

  let wishlist: Wishlist;

  if (customerWishlists.length) {
    wishlist = {
      ...customerWishlists[0],
      wishlist_product_data: emptyProductsResponse
    };
  } else {
    const { data: newWishlist } = await context.$bigcommerce.api
      .createWishlist({
        customer_id: customerId,
        name: context.$bigcommerce.config.app.$config.wishlist.authenticatedName
      });

    wishlist = {
      ...newWishlist,
      wishlist_product_data: emptyProductsResponse
    };
  }

  const localStorageItem = window.localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);
  if (localStorageItem) {
    const guestWishlist: Wishlist = JSON.parse(localStorageItem);
    const mergedWishlist = await mergeWishlists(context, guestWishlist, wishlist);
    wishlist = mergedWishlist;
  }

  wishlist.wishlist_product_data = await refreshWishlistProducts(context, wishlist);

  return wishlist;
};
