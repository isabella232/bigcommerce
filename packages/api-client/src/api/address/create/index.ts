import { Endpoints } from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';
import { getCustomerIdFromCookie } from '../../../helpers/auth';

export const createCustomerAddress: Endpoints['createCustomerAddress'] = async (
  context,
  params
) => {
  return await context.client.v3.post(endpointPaths.addresses, [
    {
      ...params,
      customer_id: await getCustomerIdFromCookie(context)
    }
  ]);
};
