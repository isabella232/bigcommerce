import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const updateCustomerFormFields: Endpoints['updateCustomerFormFields'] = async (
  context,
  params
) => {
  const { data } = params;

  return await context.client.v3.put(BigCommerceEndpoints.formFieldValues, data);
};

export default updateCustomerFormFields;
