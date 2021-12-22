/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { BIGCOMMERCE_CREATE_WISHLIST_FAILED } from '../../helpers/consts';
import { getUserId, emptyProductsResponse, refreshWishlistProducts } from '../../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const clear: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['clear'] = async (
  context: Context,
  { currentWishlist }
) => {
  await context.$bigcommerce.api.deleteWishlist(currentWishlist.id);

  const customerId = getUserId(context);

  if (!customerId) {
    throw new Error(BIGCOMMERCE_CREATE_WISHLIST_FAILED);
  }

  const res = await context.$bigcommerce.api.createWishlist({
    customer_id: customerId,
    name: context.$bigcommerce.config.app
      .$config.wishlist.authenticatedName
  });

  const wishlist: Wishlist = {
    ...res.data,
    wishlist_product_data: emptyProductsResponse
  };

  return wishlist;
};
