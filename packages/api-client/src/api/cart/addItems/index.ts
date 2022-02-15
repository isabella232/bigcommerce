import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';
import { AddLineItemsResponse, Endpoints } from '../../../types';

export const addCartItems: Endpoints['addCartItems'] = async (
  context,
  params
) => {
  const { cartId, data, include } = params;

  // The list price needs to be removed on the API level, to cater for modified requests
  if (data?.custom_items) {
    data.custom_items = data.custom_items.map(item => {
      delete item.list_price;
      return item;
    });
  }

  if (data?.line_items) {
    data.line_items = data.line_items.map(item => {
      delete item.list_price;
      return item;
    });
  }

  const response: AddLineItemsResponse = await context.client.v3.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId),
      query: include ? { include } : undefined
    }),
    data
  );

  await prepareEmbeddedCheckoutUrlOnResponse(context, response);

  return response;
};

export default addCartItems;
