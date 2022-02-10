import { Ref, computed } from '@vue/composition-api';
import {
  sharedRef,
  UseReviewErrors,
  Logger,
  generateContext
} from '@vue-storefront/core';
import { ProductReviewCollectionResponse } from '@vue-storefront/bigcommerce-api';
import { params } from './params';
import {
  UseReviewSearchParams,
  UseReviewAddParams,
  Context,
  UseReviewResponse
} from '../index';

/**
 *  Returns product reviews data and actions.
 *
 *  @remarks
 *  The `useReview` composable has build in actions for searching and adding product reviews:
 *
 *  - `{ search }` - Function for searching for product reviews. Result is stored in `reviews` property.
 *
 *  - `{ add }` - Function for adding review. Review is being created with `pending` status.
 */
export const useReview = (id: string): UseReviewResponse => {
  const reviews: Ref<ProductReviewCollectionResponse> = sharedRef(
    null,
    `useReviews-reviews-${id}`
  );
  const loading: Ref<boolean> = sharedRef(false, `useReviews-loading-${id}`);
  const error: Ref<UseReviewErrors> = sharedRef(
    {
      search: null,
      addReview: null
    },
    `useReviews-error-${id}`
  );
  const context = generateContext(params) as Context;

  const search = async (searchParams: UseReviewSearchParams): Promise<void> => {
    Logger.debug(`useReview/${id}/search`, searchParams);

    try {
      loading.value = true;
      const response = await params.searchReviews(context, searchParams);
      reviews.value = response;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      Logger.error(`useReview/${id}/search`, err);
    } finally {
      loading.value = false;
    }
  };

  const add = async (addParams: UseReviewAddParams): Promise<void> => {
    Logger.debug(`useReview/${id}/add`, addParams);

    try {
      loading.value = true;
      await params.addReview(context, addParams);
      error.value.addReview = null;
    } catch (err) {
      error.value.addReview = err;
      Logger.error(`useReview/${id}/add`, err);
    } finally {
      loading.value = false;
    }
  };

  return {
    reviews: computed(() => reviews.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    search,
    add
  };
};
