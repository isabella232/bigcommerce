import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const removeCartItem: Endpoints['removeCartItem'] = async (
  context,
  params
) => {
  const { cartId, itemId, include } = params;

  return await context.client.delete(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId, itemId),
      query: include ? { include } : undefined
    })
  );
};

export default removeCartItem;
