import { Wishlist, MetaCollection } from '..';

/**
 * Response with single wishlist.
 */
export interface WishlistResponse {
  /**
   * Wishlist model.
   * @memberof WishlistResponse
   */
  data: Wishlist,

  /**
   * Empty meta object; may be used later.
   * @memberof WishlistResponse
   */
  meta: Record<string, unknown>
}

/**
 * Response with collection of wishlists.
 */
export interface WishlistCollectionResponse {
  /**
   * Collection of the wishlists
   */
  data: Wishlist[],

  /**
   * Data about the response, including pagination and collection totals.
   */
  meta: MetaCollection
}
