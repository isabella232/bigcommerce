import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';
import { AddLineItemsResponse, Endpoints } from '../../../types';
import { getCustomerIdFromCookie } from '../../../helpers/auth';

export const updateCart: Endpoints['updateCart'] = async (context, params) => {
  const { id, include } = params;
  const idFromCookie = await getCustomerIdFromCookie(context);
  if (idFromCookie) {
    const payload = {
      customer_id: idFromCookie
    };
    const response: AddLineItemsResponse = await context.client.v3.put(
      queryString.stringifyUrl({
        url: BigCommerceEndpoints.cart(id),
        query: include ? { include } : undefined
      }), payload);

    await prepareEmbeddedCheckoutUrlOnResponse(context, response);

    return response;
  }
};

export default updateCart;
