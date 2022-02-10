import { WishlistItem } from '..';

/**
 * Wishlist item model used when creating the wishlist.
 */
type CreateWishlistItem = Omit<WishlistItem, 'id'>;

/**
 * Necessary props for creating the wishlist.
 */
export interface CreateWishlistProps {
  /**
   * Whether the wishlist is available to the public.
   */
  is_public?: boolean;
  /**
   * The title of the wishlist.
   */
  name: string;
  /**
   * Array of wishlist items.
   */
  items?: CreateWishlistItem[];
}

/**
 * Necessary props for calling the create wishlist API.
 */
export interface CreateWishlistParams extends CreateWishlistProps {
  /**
   * The customer id.
   */
  customer_id: number;
}

