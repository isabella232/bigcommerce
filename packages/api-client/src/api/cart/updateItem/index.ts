import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints, UpdateLineItemResponse } from '../../../types';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';

export const updateCartItem: Endpoints['updateCartItem'] = async (
  context,
  params
) => {
  const { cartId, itemId, include, data } = params;
  const response: UpdateLineItemResponse = await context.client.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId, itemId),
      query: include ? { include } : undefined
    }),
    data
  );

  await prepareEmbeddedCheckoutUrlOnResponse(context, response);

  return response;
};

export default updateCartItem;
