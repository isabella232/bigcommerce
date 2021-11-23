/**
 * An object which contains necessary properties for creating a product review.
 */
export interface FullCreateProductReviewProps {

    /**
     * An id of the product
     * @type {number}
     * @memberof CreateProductReviewProps
     */
    productId: number;

    /**
     * The title for the product review.
     * @type {string}
     * @memberof CreateProductReviewProps
     */
     title: string;

     /**
      * The text for the product review.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     text?: string;

     /**
      * The status of the product review. Must be one of `approved`, `disapproved` or `pending`.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     status?: string;

     /**
      * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
      * @type {number}
      * @memberof CreateProductReviewProps
      */
     rating?: number;

     /**
      * The email of the reviewer. Must be a valid email, or an empty string.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     email?: string;

     /**
      * The name of the reviewer.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     name?: string;

     /**
      * Date the product was reviewed. Must be in date-time format.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     'date_reviewed': string;
}

/**
 * An object which contains necessary properties for using add review api.
 */
export interface CreateProductReviewProps {

    /**
     * An id of the product
     * @type {number}
     * @memberof CreateProductReviewProps
     */
    productId: number;

    /**
     * The title for the product review.
     * @type {string}
     * @memberof CreateProductReviewProps
     */
     title: string;

     /**
      * The text for the product review.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     text?: string;

     /**
      * The status of the product review. Must be one of `approved`, `disapproved` or `pending`.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     status?: string;

     /**
      * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
      * @type {number}
      * @memberof CreateProductReviewProps
      */
     rating?: number;

     /**
      * The email of the reviewer. Must be a valid email, or an empty string.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     email?: string;

     /**
      * The name of the reviewer.
      * @type {string}
      * @memberof CreateProductReviewProps
      */
     name?: string;
}
