import { GetProductReviewCollectionQuery } from '@vue-storefront/bigcommerce-api';

/**
 * Necessary props to search for product reviews.
 */
export interface UseReviewSearchParams {
  /**
   * The unique numeric identifier for the product with which the reviews are associated.
   */
  productId: number;

  /**
   * An object which contains optional properties for getting a product reviews collection.
   */
  query?: GetProductReviewCollectionQuery;
}
