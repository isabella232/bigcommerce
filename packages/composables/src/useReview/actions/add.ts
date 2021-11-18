import { ProductReviewResponse } from '@vue-storefront/bigcommerce-api';
import { Context, UseReviewAddParams } from '../../types';

export const addReview = async (
  context: Context,
  params: UseReviewAddParams
): Promise<ProductReviewResponse> => {
  const { title, date_reviewed: dateReviewed, productId } = params;

  if (!productId || typeof productId !== 'number')
    throw Error(`ProductId with value: ${productId} is not valid. Use number value.`);

  if (!title || typeof title !== 'string')
    throw Error(`Title with value: ${title} is not valid. Use string value.`);

  if (!dateReviewed || typeof dateReviewed !== 'string' || !Date.parse(dateReviewed))
    throw Error(`Date reviewed with value: ${dateReviewed} is not valid. Must be a string in date-time format.`);

  return context.$bigcommerce.api.createProductReview(params);
};
