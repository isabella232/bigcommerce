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

  if (params?.address1?.length > 255 || params?.address2?.length > 255) {
    throw new Error('Address line 1 and line 2 must be 255 characters or less.');
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
