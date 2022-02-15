import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';
import { getCustomerIdFromCookie } from '../../../helpers/auth';

export const updateCustomerFormFields: Endpoints['updateCustomerFormFields'] = async (
  context,
  params
) => {
  const { data } = params;
  const idFromCookie = await getCustomerIdFromCookie(context);

  if (data?.length > 0 && idFromCookie) {
    data.forEach((item) => item.customer_id = idFromCookie);
    return await context.client.v3.put(BigCommerceEndpoints.formFieldValues, data);
  }
};

export default updateCustomerFormFields;
