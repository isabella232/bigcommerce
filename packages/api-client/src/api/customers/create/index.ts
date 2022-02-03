import jwt from 'jsonwebtoken';
import {
  BigcommerceIntegrationContext,
  CreateCustomerParameters,
  CreateCustomerResponse,
  Endpoints,
  User
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../helpers/consts';
import { getDateDaysLater } from '../../../helpers/date';

export const createCustomer: Endpoints['createCustomer'] = async (
  context,
  params
) => {
  checkParameters(params);
  params.authentication = {
    new_password: params.password
  };
  const { data } = await context.client.v3.post<
    CreateCustomerResponse,
    Array<CreateCustomerParameters>
  >(endpointPaths.customers, [params]);

  setTokenCookie(context, data[0]);

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

export function setTokenCookie(
  context: BigcommerceIntegrationContext,
  customerData: User
): void {
  const {
    config: {
      jwtTokenExpirationDays,
      secureCookies,
      sdkSettings: { secret }
    },
    res
  } = context;

  const { id, email, customer_group_id: groupId } = customerData;
  const payload = {
    customer: {
      id,
      email,
      group_id: groupId
    }
  };

  const token = jwt.sign(payload, secret, {
    algorithm: 'HS256'
  });

  res.cookie(COOKIE_KEY_CUSTOMER_DATA, token, {
    expires: getDateDaysLater(jwtTokenExpirationDays),
    httpOnly: secureCookies,
    secure: secureCookies,
    sameSite: secureCookies ? 'Strict' : 'Lax'
  });
}
