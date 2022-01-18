import {
  Endpoints
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';

export const createCustomerAddress: Endpoints['createCustomerAddress'] = async (
  context,
  params
) => {
  return await context.client.v3.post(endpointPaths.addresses, [params]);
};
