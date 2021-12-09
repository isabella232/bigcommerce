import { Wishlist, WishlistItem } from '..';

export type CreateWishlistItem = Omit<WishlistItem, 'id'>;

/**
 * Necessary props for creating the wishlist.
 */
export interface CreateWishlistProps {
  /**
   * The customer id.
   * @type {number}
   * @memberof CreateWishlistProps
   */
  customer_id: number;
  /**
   * Whether the wishlist is available to the public.
   * @type {boolean}
   * @memberof CreateWishlistProps
   */
  is_public?: boolean;
  /**
   * The title of the wishlist.
   * @type {string}
   * @memberof CreateWishlistProps
   */
  name: string;
  /**
   * Array of wishlist items.
   * @type {WishlistItem[]}
   * @memberof CreateWishlistProps
   */
  items?: CreateWishlistItem[];
}

/**
 * Response of creating the wishlist.
 */
export interface CreateWishlistResponse {
  /**
   * Wishlist model.
   * @memberof CreateWishlistResponse
   */
  data: Wishlist,

  /**
   * Empty meta object; may be used later.
   * @memberof CreateWishlistResponse
   */
  meta: Record<string, unknown>
}
