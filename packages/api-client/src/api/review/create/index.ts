import dayjs from 'dayjs';
import {
  ProductReviewResponse,
  Endpoints,
  ExtendedCreateProductReviewProps
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const createProductReview: Endpoints['createProductReview'] = async (
  context,
  props
) => {
  const { title, productId } = props;

  if (!productId || typeof productId !== 'number')
    throw Error(`ProductId with value: ${productId} is not valid. Use number value.`);

  if (!title || typeof title !== 'string')
    throw Error(`Title with value: ${title} is not valid. Use string value.`);

  // Product id is not required in the CREATE product review props, just to get correct endpoint.
  delete props.productId;

  return context.client.v3.post<
  ProductReviewResponse,
  ExtendedCreateProductReviewProps
  >(BigCommerceEndpoints.reviews(productId), {
    ...props,
    date_reviewed: dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
  });
};
