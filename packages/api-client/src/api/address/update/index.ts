import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const updateCustomerAddress: Endpoints['updateCustomerAddress'] = async (
  context,
  params
) => {
  return await context.client.v3.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.addresses
    }),
    [params]
  );
};

export default updateCustomerAddress;
