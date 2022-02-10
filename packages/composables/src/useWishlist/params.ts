import { UseWishlistFactoryParams } from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem } from '../types';
import { useUser } from '../useUser';
import { load, addItem, clear, removeItem, isInWishlist } from './actions';

export const params: UseWishlistFactoryParams<
  Wishlist,
  WishlistItem,
  Product
> = {
  provide() {
    return {
      user: useUser()
    };
  },
  load,
  addItem,
  clear,
  removeItem,
  isInWishlist
};
