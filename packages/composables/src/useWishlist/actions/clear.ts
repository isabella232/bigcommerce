/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const clear: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['clear'] = async (
  context: Context,
  { currentWishlist }
) => {
  console.log('Mocked: useWishlist.clear');
  return {} as Wishlist;
};
