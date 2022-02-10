import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { getCustomerAddress } from '../get';
import { Endpoints } from '../../../types';

export const deleteCustomerAddress: Endpoints['deleteCustomerAddress'] = async (
  context,
  params
) => {
  const { data: ownAddresses } = await getCustomerAddress(context, {});
  if (!ownAddresses.find(address => address.id === params['id:in'][0])) {
    throw new Error('You can delete your own address only.');
  }

  return await context.client.v3.delete(
    queryString.stringifyUrl(
      {
        url: BigCommerceEndpoints.addresses,
        query: { ...params }
      },
      {
        arrayFormat: 'comma'
      }
    )
  );
};

export default deleteCustomerAddress;
