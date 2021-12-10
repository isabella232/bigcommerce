import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const addCartItems: Endpoints['addCartItems'] = async (
  context,
  params
) => {
  const { cartId, data, include } = params;

  return await context.client.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId),
      query: include ? { include } : undefined
    }),
    data
  );
};

export default addCartItems;
