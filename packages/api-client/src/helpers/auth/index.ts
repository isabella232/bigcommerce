import jwt from 'jsonwebtoken';
import { BigcommerceIntegrationContext, COOKIE_KEY_CUSTOMER_DATA } from '../..';
import * as Login from '../../api/customers/login';

export const getCustomerIdFromCookie = async (
  context: BigcommerceIntegrationContext
): Promise<number> => {
  const {
    config: {
      sdkSettings: { devtoolsAppSecret }
    },
    req
  } = context;

  const decodedToken = jwt.decode(req?.cookies[COOKIE_KEY_CUSTOMER_DATA]);
  if (decodedToken?.customer?.id) {
    try {
      jwt.verify(req.cookies[COOKIE_KEY_CUSTOMER_DATA], devtoolsAppSecret);
      return decodedToken.customer.id;
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        await Login.performLogin(context, decodedToken.customer.id);
        const customerDataToken = await Login.verifyLogin(context);
        Login.setTokenCookie(context, customerDataToken);
        return decodedToken.customer.id;
      }

      throw { statusCode: 401, error };
    }
  }

  return null;
};
