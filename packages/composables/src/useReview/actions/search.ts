import { ProductReviewCollectionResponse } from '@vue-storefront/bigcommerce-api';
import { Context, UseReviewSearchParams } from '../../types';

export const searchReviews = async (
  context: Context,
  searchParams: UseReviewSearchParams
): Promise<ProductReviewCollectionResponse> => {
  const { productId } = searchParams;

  if (!productId || typeof productId !== 'number') {
    throw new Error(`ProductId with value: ${productId} is not valid. Use number value.`);
  }

  const props = { productId };
  const query = searchParams.query;

  return context.$bigcommerce.api.getProductReviewCollection(props, query);
};
