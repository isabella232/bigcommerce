import { Context, UseUserLoginParams } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';

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
  if (!loginResponse.is_valid) {
    throw new Error(loginResponse.errorMessage);
  }

  return { user: { id: loginResponse.customer_id, email: username }};
};
