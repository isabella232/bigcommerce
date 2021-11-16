export * from './get';

/**
 * Product Review Interface.
 */
export interface Review {

    /**
     * A product review model.
     */
    data: {

        /**
         * The title for the product review. Required in /POST.
         */
        title: string,

        /**
         * The text for the product review.
         */
        text?: string,

        /**
         * The status of the product review. Must be one of `approved`, `disapproved` or `pending`.
         */
        status?: 'approved' | 'disapproved' | 'pending',

        /**
         * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
         */
        rating?: 0 | 1 | 2 | 3 | 4 | 5,

        /**
         * The email of the reviewer. Must be a valid email, or an empty string.
         */
        email?: string,

        /**
         * The name of the reviewer.
         */
        name?: string,

        /**
         * Date the product was reviewed. Required in /POST.
         */
        'date_received': string,

        /**
         * The unique numeric ID of the product review; increments sequentially.
         */
        id?: number,

        /**
         * The unique numeric identifier for the product with which the review is associated.
         */
        'product_id'?: number,

        /**
         * Date the product review was created.
         */
        'date_created'?: string,

        /**
         * Date the product review was modified.
         */
        'date_modified'?: string
    }

    /**
     * Empty meta object; may be used later.
     */
    meta: Record<string, unknown>
}
