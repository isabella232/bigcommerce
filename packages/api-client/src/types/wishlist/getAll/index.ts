/**
 * Optional filter parameters to retrieve.
 */
export type GetAllWishlistQuery = {
  /**
   * All wishlists relating to the customer.
   */
  customer_id?: number,

  /**
   * The page number of results per page. 1 is the default and starts from record 0.
   */
  page?: number,

  /**
   * The numbers of items to return per page. Default is 50 and maximum is 250.
   */
  limit?: number
}
