import {
  WishlistResponse,
  CreateWishlistParams,
  Endpoints
} from '../../../types';
import { getCustomerIdFromCookie } from '../../../helpers/auth';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const createWishlist: Endpoints['createWishlist'] = async (
  context,
  props
) => {
  const { name } = props;
  const customerId = await getCustomerIdFromCookie(context);

  if (!name || typeof name !== 'string') {
    throw Error(`Name with value: ${name} is not valid. Use string value.`);
  }

  if (!customerId || typeof customerId !== 'number') {
    throw Error(`Customer ID with value: ${customerId} is not valid.`);
  }

  return context.client.v3.post<WishlistResponse, CreateWishlistParams>(
    BigCommerceEndpoints.wishlists(),
    {
      ...props,
      customer_id: customerId
    }
  );
};
