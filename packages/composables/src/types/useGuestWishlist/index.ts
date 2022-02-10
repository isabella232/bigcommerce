/**
 * Guest wishlist stored item.
 */
export interface GuestWishlistItem {
  /**
   * Item it created from product id and variant id in ${product_id}_${variant_id} format.
   */
  id: string,

  /**
   * Id of the product vartiant.
   */
  variant_id?: number,

  /**
   * Id of the product from wishlist.
   */
  product_id: number
}
