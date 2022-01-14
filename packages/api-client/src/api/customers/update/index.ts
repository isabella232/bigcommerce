import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const updateCustomer: Endpoints['updateCustomer'] = async (
  context,
  params
) => {
  return await context.client.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.customers
    }),
    [params]
  );
};

export default updateCustomer;
