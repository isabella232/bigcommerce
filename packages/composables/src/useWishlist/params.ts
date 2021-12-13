/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem } from '../types';
import { load, addItem, clear, removeItem, isInWishlist } from './actions';

export const params: UseWishlistFactoryParams<Wishlist, WishlistItem, Product> = {
  load,
  addItem,
  clear,
  removeItem,
  isInWishlist
};
