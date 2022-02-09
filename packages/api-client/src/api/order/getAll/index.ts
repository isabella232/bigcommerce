import { stringifyUrl } from 'query-string';
import { Endpoints } from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { getCustomerIdFromCookie } from '../../../helpers/auth';

export const getOrders: Endpoints['getOrders'] = async (context, params) => {
  return await context.client.v2.get(
    stringifyUrl({
      url: BigCommerceEndpoints.orders,
      query: {
        ...params,
        customer_id: await getCustomerIdFromCookie(context)
      }
    })
  );
};
