import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const updateCart: Endpoints['updateCart'] = async (context, params) => {
  const { id, data, include } = params;

  return await context.client.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(id),
      query: include ? { include } : undefined
    }),
    data
  );
};

export default updateCart;
