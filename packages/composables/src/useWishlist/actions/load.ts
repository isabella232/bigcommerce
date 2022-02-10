import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { load as guestLoad } from '../../useGuestWishlist/actions';
import { Context, Wishlist, WishlistItem } from '../../types';
import { getUserId, refreshWishlistProducts, emptyProductsResponse, mergeWishlists } from '../../helpers';
import {
  BIGCOMMERCE_GUEST_WISHLIST_KEY
} from '../../helpers/consts';

export const load: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['load'] = async (
  context: Context
) => {
  const customerId = getUserId(context);

  if (!customerId) {
    return guestLoad(context, {});
  }

  const {
    data: customerWishlists
  } = await context.$bigcommerce.api.getAllWishlists();

  let wishlist: Wishlist;

  if (customerWishlists.length) {
    wishlist = {
      ...customerWishlists[0],
      wishlist_product_data: emptyProductsResponse
    };
  } else {
    const { data: newWishlist } = await context.$bigcommerce.api
      .createWishlist({
        name: context.$bigcommerce.config.app
          .$config.theme.wishlist.name,
        is_public: context.$bigcommerce.config.app
          .$config.theme.wishlist.isPublic,
        items: []
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
