import {
  ProductReviewResponse,
  Endpoints,
  CreateProductReviewProps
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const createProductReview: Endpoints['createProductReview'] = (
  context,
  props
) => {
  const { title, date_reviewed: dateReviewed, productId } = props;

  if (!productId || typeof productId !== 'number')
    throw Error(`ProductId with value: ${productId} is not valid. Use number value.`);

  if (!title || typeof title !== 'string')
    throw Error(`Title with value: ${title} is not valid. Use string value.`);

  if (!dateReviewed || typeof dateReviewed !== 'string' || !Date.parse(dateReviewed))
    throw Error(`Date reviewed with value: ${dateReviewed} is not valid. Must be a string in date-time format.`);

  // Product id is not required in the CREATE product review props, just to get correct endpoint.
  delete props.productId;

  return context.client.post<
    ProductReviewResponse,
    CreateProductReviewProps
    >(BigCommerceEndpoints.reviews(productId), props);
};
