export * from './get';
export * from './getAll';
export * from './create';

/**
 * Possible values of review statuses.
 */
export enum ReviewStatus {
  /**
   * Approved status.
   */
  approved = 'approved',
  /**
   * Disapproved status.
   */
  disapproved = 'disapproved',
  /**
   * Pending status.
   */
  pending = 'pending'
}

/**
 * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
 */
export type ReviewRating = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Product review model.
 */
export interface ProductReview {
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
  status: ReviewStatus;
  /**
   * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
   */
  rating: ReviewRating;
  /**
   * The email of the reviewer. Must be a valid email, or an empty string.
   */
  email: string;
  /**
   * The name of the reviewer.
   */
  name: string;
  /**
   * Date the product was reviewed.
   */
  'date_reviewed': string;
  /**
   * The unique numeric ID of the product review; increments sequentially.
   */
  id: number;
  /**
   * The unique numeric identifier for the product with which the review is associated.
   */
  'product_id': number;
  /**
   * Date the product review was created.
   */
  'date_created': string;
  /**
   * Date the product review was modified.
   */
  'date_modified': string;
}
