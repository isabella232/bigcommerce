import { stringifyUrl } from 'query-string';
import {
  GetAllWishlistResponse,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const getAllWishlists: Endpoints['getAllWishlists'] = async (
  context,
  query?
) => {
  return context.client.get<GetAllWishlistResponse>(
    stringifyUrl({
      url: BigCommerceEndpoints.wishlists,
      query
    })
  );
};
