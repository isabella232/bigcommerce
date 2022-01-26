import { stringifyUrl } from 'query-string';
import { getCustomerIdParameter } from '../../../helpers/auth';
import {
  WishlistCollectionResponse,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const getAllWishlists: Endpoints['getAllWishlists'] = async (
  context,
  query?
) => {
  const customerId = getCustomerIdParameter(context, query)[0];

  if (!customerId || typeof customerId !== 'number') {
    throw Error(`Customer ID with value: ${customerId} is not valid.`);
  }

  return context.client.v3.get<WishlistCollectionResponse>(
    stringifyUrl({
      url: BigCommerceEndpoints.wishlists(),
      query: {
        ...query,
        customer_id: customerId
      }
    })
  );
};
