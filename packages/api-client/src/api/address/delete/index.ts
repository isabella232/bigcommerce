import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const deleteCustomerAddress: Endpoints['deleteCustomerAddress'] = async (
  context,
  params
) => {
  return await context.client.delete(
    queryString.stringifyUrl(
      {
        url: BigCommerceEndpoints.addresses,
        query: params
      },
      {
        arrayFormat: 'comma'
      }
    )
  );
};

export default deleteCustomerAddress;
