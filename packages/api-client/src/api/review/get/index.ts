import { Endpoints, ProductReviewResponse } from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const getProductReview: Endpoints['getProductReview'] = async (
  context,
  props
) => {
  const { productId, reviewId } = props;

  if (!productId || typeof productId !== 'number')
    throw Error(
      `ProductId with value: ${productId} is not valid. Use number value.`
    );

  if (!reviewId || typeof reviewId !== 'number')
    throw Error(
      `ReviewId with value: ${reviewId} is not valid. Use number value.`
    );

  return context.client.get<ProductReviewResponse>(
    BigCommerceEndpoints.review(productId, reviewId)
  );
};
