/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const removeItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['removeItem'] = async (
  context: Context,
  { currentWishlist, product }
) => {
  console.log('Mocked: useWishlist.removeItem');
  return {} as Wishlist;
};
