import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { prepareEmbeddedCheckoutUrlOnResponse } from '../../../helpers/cartResponse';
import { Endpoints, GetCartResponse } from '../../../types';

export const getCart: Endpoints['getCart'] = async (context, params) => {
  const { id, include } = params;

  const response = await context.client.v3.get(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(id),
      query: include ? { include } : undefined
    })
  );

  await prepareEmbeddedCheckoutUrlOnResponse(context, response as GetCartResponse);

  return response as Promise<GetCartResponse>;
};

export default getCart;
