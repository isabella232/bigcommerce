import { BigcommerceIntegrationContext } from '../../../types/context';
import { GetProductReviewProps, Review } from '../../../types/review';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export async function getProductReview(
  context: BigcommerceIntegrationContext,
  props: GetProductReviewProps
): Promise<Review> {
  const { productId, reviewId } = props;

  if (!productId || typeof productId !== 'number')
    throw Error(`ProductId with value: ${productId} is not valid. Use number value.`);

  if (!reviewId || typeof reviewId !== 'number')
    throw Error(`ReviewId with value: ${reviewId} is not valid. Use number value.`);

  return context.client.get<Review>(BigCommerceEndpoints.review(productId, reviewId));
}
