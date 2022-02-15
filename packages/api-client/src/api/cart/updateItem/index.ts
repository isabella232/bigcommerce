import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints, UpdateLineItemResponse } from '../../../types';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';

export const updateCartItem: Endpoints['updateCartItem'] = async (
  context,
  params
) => {
  const { cartId, itemId, include, data } = params;

  // The list price needs to be removed on the API level, to cater for modified requests
  if (data.line_item?.list_price) {
    delete data.line_item.list_price;
  }

  const response: UpdateLineItemResponse = await context.client.v3.put(
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
