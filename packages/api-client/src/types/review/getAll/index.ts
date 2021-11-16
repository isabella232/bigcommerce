import { MetaCollection, ProductReview } from '../../index';

/**
 * An object which contains necessary properties for getting a product review collection.
 */
export type GetProductReviewCollectionProps = {

    /**
     *  An id of the product
     */
    productId: number;
}

/**
 * An object which contains optional properties for getting a product review collection.
 */
export type GetProductReviewCollectionQuery = {

    /**
     * Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
     */
     include_fields?: string;

     /**
      * Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
      */
     exclude_fields?: string;

     /**
      * Specifies the page number in a limited (paginated) list of products.
      */
     page?: number;

     /**
      * Controls the number of items per page in a limited (paginated) list of products.
      */
     limit?: number;

     /**
      * Filter items by status. `1` for approved, `0` for pending.
      */
     status?: number;
}

/**
 * Product Review Collection response.
 */
export interface ProductReviewCollectionResponse {

    /**
      * Collection of product reviews.
      * @type {Array<ProductReview>}
      * @memberof ProductReviewCollectionResponse
      */
    data: ProductReview[];

     /**
      * Data about the response, including pagination and collection totals.
      * @type {MetaCollection}
      * @memberof ProductReviewCollectionResponse
      */
    meta: MetaCollection;
 }
