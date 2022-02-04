import { useWishlistFactory } from '@vue-storefront/core';
import type {
  Product
} from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem } from '../types';
import { params } from './params';

/**
 * Managing guest wishlist.
 * Loading the wishlist from `localStorage`, adding/removing products.
 */
export const useGuestWishlist = useWishlistFactory<Wishlist, WishlistItem, Product>(params);
