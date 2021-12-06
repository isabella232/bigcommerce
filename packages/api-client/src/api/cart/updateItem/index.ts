import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const updateCartItem: Endpoints['updateCartItem'] = async (
  context,
  params
) => {
  const { cartId, itemId, include, data } = params;

  return await context.client.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId, itemId),
      query: include ? { include } : undefined
    }),
    data
  );
};

export default updateCartItem;
