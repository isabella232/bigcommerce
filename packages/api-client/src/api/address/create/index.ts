import {
  Endpoints
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';

export const createCustomerAddress: Endpoints['createCustomerAddress'] = async (
  context,
  params
) => {
  const { client } = context;
  return await client.post(endpointPaths.addresses, [params]);
};
