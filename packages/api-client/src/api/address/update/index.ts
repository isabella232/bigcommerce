import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { getCustomerIdFromCookie } from '../../../helpers/auth';
import { Endpoints } from '../../../types';
import { getCustomerAddress } from '../get';

export const updateCustomerAddress: Endpoints['updateCustomerAddress'] = async (
  context,
  params
) => {
  const { data: ownAddresses } = await getCustomerAddress(context, {});
  if (!ownAddresses.find(address => address.id === params.id)) {
    throw new Error('You can edit your own address only.');
  }

  return await context.client.v3.put(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.addresses
    }),
    [{
      ...params,
      customer_id: await getCustomerIdFromCookie(context)
    }]
  );
};

export default updateCustomerAddress;
