import { stringifyUrl } from 'query-string';
import {
  WishlistCollectionResponse,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const getAllWishlists: Endpoints['getAllWishlists'] = async (
  context,
  query?
) => {
  return context.client.v3.get<WishlistCollectionResponse>(
    stringifyUrl({
      url: BigCommerceEndpoints.wishlists(),
      query
    })
  );
};
