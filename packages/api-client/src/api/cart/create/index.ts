import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { CreateCartResponse, Endpoints } from '../../../types';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';

export const createCart: Endpoints['createCart'] = async (context, params) => {
  const { data, include } = params;

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
