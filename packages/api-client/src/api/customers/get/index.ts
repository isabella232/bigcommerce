import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const getCustomers: Endpoints['getCustomers'] = async (
  context,
  params
) => {
  return await context.client.get(
    queryString.stringifyUrl(
      {
        url: BigCommerceEndpoints.customers,
        query: params
      },
      {
        arrayFormat: 'comma'
      }
    )
  );
};

export default getCustomers;
