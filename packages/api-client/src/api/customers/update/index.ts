import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';
import { getCustomerIdFromCookie } from '../../../helpers/auth';

export const updateCustomer: Endpoints['updateCustomer'] = async (
  context,
  params
) => {
  const idFromCookie = await getCustomerIdFromCookie(context);
  if (idFromCookie) {
    return await context.client.v3.put(
      queryString.stringifyUrl({
        url: BigCommerceEndpoints.customers
      }),
      [{
        ...params,
        id: idFromCookie
      }]
    );
  }
};

export default updateCustomer;
