import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';
import { AddLineItemsResponse, Endpoints } from '../../../types';

export const updateCart: Endpoints['updateCart'] = async (context, params) => {
  const { id, data, include } = params;

  const response: AddLineItemsResponse = await context.client.v3.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(id),
      query: include ? { include } : undefined
    }),
    data
  );

  await prepareEmbeddedCheckoutUrlOnResponse(context, response);

  return response;
};

export default updateCart;
