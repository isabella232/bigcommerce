import jwt from 'jsonwebtoken';
import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { getCustomerIdFromCookie } from '../../../helpers/auth';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../helpers/consts';
import { BigcommerceIntegrationContext, Endpoints } from '../../../types';

export const getCustomers: Endpoints['getCustomers'] = async (
  context,
  params
) => {
  const idFromCookie = await getCustomerIdFromCookie(context);
  if (idFromCookie) {
    return await context.client.v3.get(
      queryString.stringifyUrl(
        {
          url: BigCommerceEndpoints.customers,
          query: {
            ...params,
            'id:in': [idFromCookie]
          }
        },
        {
          arrayFormat: 'comma'
        }
      )
    );
  }
};

export function getCustomerId(
  context: BigcommerceIntegrationContext,
  params?: {
    'id:in'?: Array<number>;
  }
): number {
  const {
    config: {
      sdkSettings: { devtoolsAppSecret }
    },
    req
  } = context;

  try {
    if (req.cookies[COOKIE_KEY_CUSTOMER_DATA]) {
      const decodedToken = jwt.verify(
        req.cookies[COOKIE_KEY_CUSTOMER_DATA],
        devtoolsAppSecret
      );
      if (decodedToken?.customer?.id) {
        return decodedToken.customer.id;
      }
    }

    if (
      'id:in' in params &&
      Array.isArray(params['id:in']) &&
      params['id:in'].length
    ) {
      return params['id:in'][0];
    }
  } catch (error) {
    throw new Error(error);
  }

  throw new Error('No customer ID');
}

export default getCustomers;
