import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';
import { AddLineItemsResponse, Endpoints } from '../../../types';

export const addCartItems: Endpoints['addCartItems'] = async (
  context,
  params
) => {
  const { cartId, data, include } = params;

  const response: AddLineItemsResponse = await context.client.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId),
      query: include ? { include } : undefined
    }),
    data
  );

  prepareEmbeddedCheckoutUrlOnResponse(context, response);

  return response;
};

export default addCartItems;
