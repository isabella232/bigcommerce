export * from './responses';
export * from './create';
export * from './getAll';
export * from './addItems';
export * from './removeItem';

/**
 * Wishlist item model.
 */
export interface WishlistItem {
  /**
   * The ID of the item.
   */
  id?: number,
  /**
   * The ID of the product.
   */
  product_id: number,
  /**
   * The variant ID of the product.
   */
  variant_id?: number
}

/**
 * Wishlist model.
 */
export interface Wishlist {
  /**
   * Wishlist ID
   */
  id: number,
  /**
   * The name of the wishlist.
   */
  name: string,
  /**
   * The ID the customer to which the wishlist belongs.
   */
  customer_id: number,
  /**
   * Whether the wishlist is available to the public.
   */
  is_public: boolean,
  /**
   * The token of the wishlist. This is created internally within BigCommerce.
   * The wishlist ID is to be used for external apps. Read-Only.
   */
  token: string,
  /**
   * Array of wishlist items.
   */
  items: WishlistItem[],

}
