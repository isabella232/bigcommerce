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

  return await context.client.v3.post<
    ValidateCredentialsResponse,
    ValidateCredentialsParameter
  >(endpointPaths.validateCredentials, params);
}

function checkParameters(params: ValidateCredentialsParameter) {
  if (!params.email || !params.password) {
    throw new Error('Required parameters missing.');
  }
}
