import { useWishlistFactory } from '@vue-storefront/core';
import type {
  Product
} from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem } from '../types';
import { params } from './params';

/**
 * Managing wishlist for authenticated users.
 * Loading the wishlist, adding/removing products.
 */
export const useWishlist = useWishlistFactory<Wishlist, WishlistItem, Product>(params);
