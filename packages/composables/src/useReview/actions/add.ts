import { ProductReviewResponse } from '@vue-storefront/bigcommerce-api';
import { Context, UseReviewAddParams } from '../../types';

export const addReview = async (
  context: Context,
  params: UseReviewAddParams
): Promise<ProductReviewResponse> => {
  const { title, productId } = params;

  if (!productId || typeof productId !== 'number')
    throw Error(`ProductId with value: ${productId} is not valid. Use number value.`);

  if (!title || typeof title !== 'string')
    throw Error(`Title with value: ${title} is not valid. Use string value.`);

  return context.$bigcommerce.api.createProductReview(params);
};
