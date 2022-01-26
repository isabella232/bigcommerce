import { BigcommerceIntegrationContext, COOKIE_KEY_CUSTOMER_DATA } from '../..';
const jwt = require('jsonwebtoken');

export const getCustomerIdFromCookie = (
  context: BigcommerceIntegrationContext
): number => {
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
  } catch (error) {
    throw new Error(error);
  }

  throw new Error('No customer ID');
};
