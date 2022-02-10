import { stringifyUrl } from 'query-string';
import {
  ProductReviewCollectionResponse,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const getProductReviewCollection: Endpoints['getProductReviewCollection'] = async (
  context,
  props,
  query?
) => {
  const { productId } = props;

  if (!productId || typeof productId !== 'number')
    throw Error(`ProductId with value: ${productId} is not valid. Use number value.`);

  return context.client.v3.get<ProductReviewCollectionResponse>(
    stringifyUrl({
      url: BigCommerceEndpoints.reviews(productId),
      query: { ...query }
    })
  );
};
