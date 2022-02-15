import {
  Endpoints
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';
import { getCustomerIdFromCookie } from '../../../helpers/auth';

export const createCustomerAddress: Endpoints['createCustomerAddress'] = async (
  context,
  params
) => {
  if (params?.address1?.length > 255 || params?.address2?.length > 255) {
    throw new Error('Address line 1 and line 2 must be 255 characters or less.');
  }

  return await context.client.v3.post(endpointPaths.addresses, [{
    ...params,
    customer_id: await getCustomerIdFromCookie(context)
  }]);
};
