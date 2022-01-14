import { useWishlistFactory } from '@vue-storefront/core';
import type {
  Product
} from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem } from '../types';
import { params } from './params';

export const useWishlist = useWishlistFactory<Wishlist, WishlistItem, Product>(params);
