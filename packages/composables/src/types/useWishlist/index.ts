import {
  ProductsResponse,
  Wishlist as WishlistAPI,
  WishlistItem as WishlistItemAPI
} from '@vue-storefront/bigcommerce-api';
import { GuestWishlistItem } from '..';

export * from './parameters';

/**
 * Wishlist item common for guest wishlist and authenticated one.
 */
export type WishlistItem = GuestWishlistItem | WishlistItemAPI;

/**
 * Wishlist model.
 */
export interface Wishlist extends Omit<WishlistAPI, 'items'> {
  /**
   * Response of get products api call
   */
  wishlist_product_data: ProductsResponse,

  /**
   * Array of wishlist items.
   */
  items: WishlistItem[];
}

