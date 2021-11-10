import {
  BigcommerceIntegrationContext,
  CreateCustomerParameters,
  CustomerData,
  CreateCustomerResponse
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';

export async function createCustomer(
  context: BigcommerceIntegrationContext,
  params: CreateCustomerParameters
): Promise<CustomerData> {
  checkParameters(params);

  const { client } = context;
  const { data } = await client.post<
    CreateCustomerResponse,
    Array<CreateCustomerParameters>
  >(endpointPaths.customers, [params]);

  return data[0];
}

function checkParameters(params: CreateCustomerParameters) {
  if (
    !params.first_name ||
    !params.last_name ||
    !params.email ||
    !params.password ||
    !params.acceptsMarketingEmails ||
    !Array.isArray(params.customFields)
  ) {
    throw new Error('Required parameters missing.');
  }
}
