import {
  WishlistResponse,
  CreateWishlistProps,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const createWishlist: Endpoints['createWishlist'] = async (
  context,
  props
) => {
  const { name, customer_id: customerId } = props;

  if (!name || typeof name !== 'string') {
    throw Error(`Name with value: ${name} is not valid. Use string value.`);
  }

  if (!customerId || typeof customerId !== 'number') {
    throw Error(`Customer ID with value: ${customerId} is not valid. Use number value.`);
  }

  return context.client.post<WishlistResponse, CreateWishlistProps>(
    BigCommerceEndpoints.wishlists,
    props
  );
};
