import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const getCart: Endpoints['getCart'] = async (context, params) => {
  const { id, include } = params;

  return await context.client.get(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(id),
      query: include ? { include } : undefined
    })
  );
};

export default getCart;
