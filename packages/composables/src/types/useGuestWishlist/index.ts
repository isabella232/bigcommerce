import { ProductsResponse } from '@vue-storefront/bigcommerce-api';

/**
 * Guest wishlist stored item
 */
export interface GuestWishlistItem {
  /**
   * Item it created from product id and variant id in ${product_id}_${variant_id} format
   */
  id: string,

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
  /**
   * Name of the wishlist
   */
  name: string,

  /**
   * Guest wishlists items collection
   */
  items: GuestWishlistItem[],

  /**
   * Response of get products api call
   */
  wishlist_product_data: ProductsResponse,

  /**
   * Is wishlist public
   */
  is_public: boolean
}
