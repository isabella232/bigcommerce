import { ReviewRating, ReviewStatus } from '..';
/**
 * Properties to add review.
 */
export interface CreateProductReviewProps {
  /**
   * An id of the product
   */
  productId: number;
  /**
   * The title for the product review.
   */
  title: string;
  /**
   * The text for the product review.
   */
  text?: string;
  /**
   * The status of the product review. Must be one of `approved`, `disapproved` or `pending`.
   */
  status?: ReviewStatus;
  /**
   * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
   */
  rating?: ReviewRating;
  /**
   * The email of the reviewer. Must be a valid email, or an empty string.
   */
  email?: string;
  /**
   * The name of the reviewer.
   */
  name?: string;
}

/**
 * Properties for creating a product review.
 * Extended with date_reviewed param.
 */
export interface ExtendedCreateProductReviewProps extends CreateProductReviewProps {
  /**
   * Date the product was reviewed. Must be in date-time format.
   */
  'date_reviewed': string;
}

