import {
  BigcommerceIntegrationContext,
  ValidateCredentialsParameter,
  ValidateCredentialsResponse
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';

export async function validateCredentials(
  context: BigcommerceIntegrationContext,
  params: ValidateCredentialsParameter
): Promise<ValidateCredentialsResponse> {
  checkParameters(params);

  const { client } = context;
  return await client.post<
    ValidateCredentialsResponse,
    ValidateCredentialsParameter
  >(endpointPaths.validateCredentials, params);
}

function checkParameters(params: ValidateCredentialsParameter) {
  if (!params.email || !params.password) {
    throw new Error('Required parameters missing.');
  }
}
