import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const getCustomerAddress: Endpoints['getCustomerAddress'] = async (
  context,
  params
) => {
  return await context.client.get(
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

export default getCustomerAddress;
