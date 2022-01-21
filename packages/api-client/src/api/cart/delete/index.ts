import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const deleteCart: Endpoints['deleteCart'] = async (context, params) => {
  const { id } = params;

  return await context.client.v3.delete(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(id)
    })
  );
};

export default deleteCart;
