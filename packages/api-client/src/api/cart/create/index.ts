import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { CreateCartResponse, Endpoints } from '../../../types';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';

export const createCart: Endpoints['createCart'] = async (context, params) => {
  const { data, include } = params;

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

  const response: CreateCartResponse = await context.client.v3.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(),
      query: include ? { include } : undefined
    }),
    data
  );

  await prepareEmbeddedCheckoutUrlOnResponse(context, response);

  return response;
};

export default createCart;
