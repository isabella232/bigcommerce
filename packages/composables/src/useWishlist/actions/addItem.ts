/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const addItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['addItem'] = async (
  context: Context,
  { currentWishlist, product }
) => {
  console.log('Mocked: useWishlist.addItem');
  return {} as Wishlist;
};
