import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { getUserId, refreshWishlistProducts, emptyWishlistResponse } from '../../helpers';
import { BIGCOMMERCE_LOAD_WISHLIST_FAILED } from '../../helpers/consts';

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
      wishlist_product_data: emptyWishlistResponse
    };
  } else {
    const { data: newWishlist } = await context.$bigcommerce.api
      .createWishlist({
        customer_id: customerId,
        name: context.$bigcommerce.config.app.$config.wishlist.authenticatedName
      });

    wishlist = {
      ...newWishlist,
      wishlist_product_data: emptyWishlistResponse
    };
  }

  await refreshWishlistProducts(context, wishlist);

  return wishlist;
};
