import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const createCart: Endpoints['createCart'] = async (context, params) => {
  const { data, include } = params;

  return await context.client.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(),
      query: include ? { include } : undefined
    }),
    data
  );
};

export default createCart;
