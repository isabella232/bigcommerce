import { ReviewGetters, AgnosticRateCount } from '@vue-storefront/core';
import type { ProductReview, ProductReviewCollectionResponse } from '@vue-storefront/bigcommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems (review: ProductReviewCollectionResponse): ProductReview[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewId(item: ProductReview): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewAuthor(item: ProductReview): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewMessage(item: ProductReview): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewRating(item: ProductReview): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewDate(item: ProductReview): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(review: ProductReviewCollectionResponse): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(review: ProductReviewCollectionResponse): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRatesCount(review: ProductReviewCollectionResponse): AgnosticRateCount[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewsPage(review: ProductReviewCollectionResponse): number {
  return 0;
}

export const reviewGetters: ReviewGetters<ProductReviewCollectionResponse, ProductReview> = {
  getItems,
  getReviewId,
  getReviewAuthor,
  getReviewMessage,
  getReviewRating,
  getReviewDate,
  getTotalReviews,
  getAverageRating,
  getRatesCount,
  getReviewsPage
};
