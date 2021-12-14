import { WishlistItem } from '..';

type CreateWishlistItem = Omit<WishlistItem, 'id'>;

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

