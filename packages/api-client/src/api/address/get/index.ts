import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { getCustomerIdFromCookie } from '../../../helpers/auth';
import { Endpoints } from '../../../types';

export const getCustomerAddress: Endpoints['getCustomerAddress'] = async (
  context,
  params
) => {
  return await context.client.v3.get(
    queryString.stringifyUrl(
      {
        url: BigCommerceEndpoints.addresses,
        query: {
          ...params,
          'customer_id:in': [await getCustomerIdFromCookie(context)]
        }
      },
      {
        arrayFormat: 'comma'
      }
    )
  );
};

export default getCustomerAddress;
