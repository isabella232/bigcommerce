import {
  CreateCustomerParameters,
  CreateCustomerResponse,
  Endpoints
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';

export const createCustomer: Endpoints['createCustomer'] = async (
  context,
  params
) => {
  checkParameters(params);
  params.authentication = {
    new_password: params.password
  };
  const { client } = context;
  const { data } = await client.post<
    CreateCustomerResponse,
    Array<CreateCustomerParameters>
  >(endpointPaths.customers, [params]);

  return data[0];
};

function checkParameters(params: CreateCustomerParameters) {
  if (
    !params.first_name ||
    !params.last_name ||
    !params.email ||
    !params.password ||
    !Array.isArray(params.custom_fields)
  ) {
    throw new Error('Required parameters missing.');
  }
}
