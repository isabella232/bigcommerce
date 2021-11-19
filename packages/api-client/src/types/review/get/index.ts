import { ProductReview } from '../index';

/**
 * An object which contains necessary properties for getting a product review data.
 */
export interface GetProductReviewProps {

    /**
     *  An id of the product
     */
    productId: number,

    /**
     *  An id of the review.
     */
    reviewId: number
}

/**
 * Product Review response.
 */
export interface ProductReviewResponse {

    /**
     * A product review model.
     * @type {ProductReview}
     * @memberof ProductReviewResponse
     */
    data: ProductReview

    /**
     * Empty meta object; may be used later.
     * @memberof ProductReviewResponse
     */
    meta: Record<string, unknown>
}

