const jwt = require('jsonwebtoken');
import { Context, UseUserLoginParams } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';
import { COOKIE_KEY_CUSTOMER_DATA } from '@vue-storefront/bigcommerce-api';

/**
 * `logIn` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {UseUserLoginParams} params Parameters for `logIn` method in `useUser` composable.
 */
export const logIn = async (context: Context, params: UseUserLoginParams): Promise<User> => {
  const {
    username,
    password
  } = params;

  const loginResponse = await context.$bigcommerce.api.loginCustomer({ email: username, password });
  if (!loginResponse.success) {
    throw new Error(loginResponse.message);
  }

  const customerDataJwt = context.$bigcommerce.config.app.$cookies.get(COOKIE_KEY_CUSTOMER_DATA);
  const customerData = jwt.decode(customerDataJwt);
  return { user: customerData.customer };

};
