import { WishlistItem } from '..';

/**
 * Wishlist item model used when adding items to the wishlist.
 */
type AddWishlistItem = Omit<WishlistItem, 'id'>;

/**
 * Necessary parameters to add items to the wishlist.
 */
export interface AddWishlistItemsParams {
  /**
   * ID of the wishlist.
   */
  wishlistId: number,
  /**
   * Array of wishlist items.
   */
  items: AddWishlistItem[]
}
