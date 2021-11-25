/**
 * Guest wishlist item representation
 */
export interface GuestWishlistItem {
  /**
   * Item it created from product id and variant id in ${product_id}_${variant_id} format
   */
  item_id: string,

  /**
   * Id of the product's vartiant
   */
  variant_id: number,

  /**
   * Id of the product from wishlist
   */
  product_id: number
}

/**
 * Guest wishlist information
 */
export interface GuestWishlist {
  items: GuestWishlistItem[]
}
