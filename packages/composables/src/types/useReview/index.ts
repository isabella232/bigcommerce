import { ComputedRef } from '@nuxtjs/composition-api';
import { ProductReviewCollectionResponse } from '@vue-storefront/bigcommerce-api';
import { UseReviewErrors } from '@vue-storefront/core';
import { UseReviewSearchParams } from '../../types';

export { UseReviewSearchParams } from './search';

/**
 * Response of useReview composable.
 */
export interface UseReviewResponse {

    /**
     * Collection of product reviews.
     */
    reviews: ComputedRef<ProductReviewCollectionResponse>,

    /**
     * Flag is set to true, if the adding or searching is in progress.
     */
    loading: ComputedRef<boolean>

    /**
     * Contains searching or adding error if occures.
     */
    error: ComputedRef<UseReviewErrors>,

    /**
     * Function for searching for product reviews. Result is stored in reviews property.
     */
    search: (searchParams: UseReviewSearchParams) => Promise<void>
}
