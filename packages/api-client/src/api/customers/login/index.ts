const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const nodeFetch = require('node-fetch');
const fetch = require('fetch-cookie/node-fetch')(nodeFetch);
const setCookieParser = require('set-cookie-parser');
import queryString from 'query-string';
import {
  BigcommerceIntegrationContext,
  Endpoints,
  LoginCustomerParameters,
  ValidateCredentialsResponse
} from '../../../types';
import {
  COOKIE_KEY_CUSTOMER_DATA,
  MESSAGE_INVALID_TOKEN_RESPONSE,
  MESSAGE_LOGIN_ERROR,
  MESSAGE_LOGIN_TOKEN_ERROR
} from '../../../helpers/consts';
import { validateCredentials } from '../validateCredentials';
import endpoints from '../../../helpers/endpointPaths';
import { getTimestampInSeconds, getDateDaysLater } from '../../../helpers/date';
import * as Login from './';

export const loginCustomer: Endpoints['loginCustomer'] = async (
  context,
  params
) => {
  try {
    const loginResponse = await Login.performLogin(context, params);
    const customerDataToken = await Login.verifyLogin(context);
    Login.setTokenCookie(context, customerDataToken);
    return loginResponse;
  } catch (error) {
    return {
      is_valid: false,
      errorMessage: error.message
    };
  }
};

export async function performLogin(
  context: BigcommerceIntegrationContext,
  customerCredentials: LoginCustomerParameters
): Promise<ValidateCredentialsResponse> {
  const { res } = context;
  const {
    customer_id: customerId,
    is_valid: isValid
  } = await validateCredentials(context, customerCredentials);

  if (!isValid) {
    throw new Error(MESSAGE_LOGIN_ERROR);
  }

  const ssoLoginLink = Login.generateSsoLoginLink(context, customerId);
  const ssoResponse = await fetch(ssoLoginLink);

  if (ssoResponse?.status !== 200 || ssoResponse?.url?.includes('/login.php')) {
    throw new Error(MESSAGE_LOGIN_TOKEN_ERROR);
  }

  const cookiesToSet = setCookieParser.parse(
    setCookieParser.splitCookiesString(ssoResponse.headers.get('set-cookie'))
  );
  cookiesToSet.forEach(({ name, value, ...options }) =>
    res.cookie(name, value, options)
  );

  return {
    customer_id: customerId,
    is_valid: isValid
  };
}

export async function verifyLogin(
  context: BigcommerceIntegrationContext
): Promise<string> {
  const {
    config: {
      sdkSettings: { devtoolsAppSecret }
    }
  } = context;

  const loggedInCustomerToken = await Login.getLoggedInCustomerToken(context);

  const decodedToken = jwt.verify(loggedInCustomerToken, devtoolsAppSecret);
  if (!decodedToken?.customer) {
    throw new Error(MESSAGE_INVALID_TOKEN_RESPONSE);
  }

  return loggedInCustomerToken;
}

export function setTokenCookie(
  context: BigcommerceIntegrationContext,
  token: string
): void {
  const {
    config: { jwtTokenExpirationDays, secureCookies },
    res
  } = context;

  res.cookie(COOKIE_KEY_CUSTOMER_DATA, token, {
    expires: getDateDaysLater(jwtTokenExpirationDays),
    httpOnly: secureCookies,
    secure: secureCookies,
    sameSite: secureCookies ? 'Strict' : 'Lax'
  });
}

export async function getLoggedInCustomerToken(
  context: BigcommerceIntegrationContext
): Promise<string> {
  const {
    config: {
      sdkSettings: { storeUrl, guestToken, devtoolsAppClientId }
    }
  } = context;

  const response = await fetch(
    queryString.stringifyUrl({
      url: `${storeUrl}${endpoints.storefrontCurrentlyLoggedInCustomer}`,
      query: {
        app_client_id: devtoolsAppClientId,
        ...(guestToken ? { guestTkn: guestToken } : {})
      }
    })
  );

  if (response?.status !== 200) {
    throw new Error(MESSAGE_INVALID_TOKEN_RESPONSE);
  }

  return await response.text();
}

export function generateSsoLoginLink(
  context: BigcommerceIntegrationContext,
  customerId: number,
  redirectUrl?: string
): string {
  const {
    config: {
      sdkSettings: { clientId, secret, storeHash, storeUrl, guestToken }
    }
  } = context;

  const dateCreated = getTimestampInSeconds();
  const payload = {
    iss: clientId,
    iat: dateCreated,
    jti: uuidv4(),
    operation: 'customer_login',
    store_hash: storeHash,
    customer_id: `${customerId}`,
    ...(redirectUrl ? { redirectUrl } : {})
  };

  const token = jwt.sign(payload, secret, {
    algorithm: 'HS256'
  });

  return queryString.stringifyUrl({
    url: `${storeUrl}${endpoints.storefrontLoginWithToken(token)}`,
    query: {
      ...(guestToken ? { guestTkn: guestToken } : {})
    }
  });
}
