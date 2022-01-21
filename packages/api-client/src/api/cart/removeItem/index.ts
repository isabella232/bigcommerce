import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';
import { AddLineItemsResponse, Endpoints } from '../../../types';

export const removeCartItem: Endpoints['removeCartItem'] = async (
  context,
  params
) => {
  const { cartId, itemId, include } = params;

  const response: AddLineItemsResponse = await context.client.v3.delete(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId, itemId),
      query: include ? { include } : undefined
    })
  );

  await prepareEmbeddedCheckoutUrlOnResponse(context, response);

  return response;
};

export default removeCartItem;
