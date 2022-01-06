const jwt = require('jsonwebtoken');
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../helpers/consts';
import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const getCustomers: Endpoints['getCustomers'] = async (
  context,
  params
) => {
  return await context.client.get(
    queryString.stringifyUrl(
      {
        url: BigCommerceEndpoints.customers,
        query: {
          ...params,
          'id:in': getCustomerIdParameter(context, params)
        }
      },
      {
        arrayFormat: 'comma'
      }
    )
  );
};

function getCustomerIdParameter(context, params) {
  const {
    config: {
      sdkSettings: { devtoolsAppSecret }
    },
    req
  } = context;

  try {
    if (req.cookies[COOKIE_KEY_CUSTOMER_DATA]) {
      const decodedToken = jwt.verify(req.cookies[COOKIE_KEY_CUSTOMER_DATA], devtoolsAppSecret);
      if (decodedToken?.customer?.id) {
        return [decodedToken.customer.id];
      }
    }

    if ('id:in' in params) {
      return params['id:in'];
    }
  } catch (error) {
    throw new Error(error);
  }

  throw new Error('No customer ID');
}

export default getCustomers;
