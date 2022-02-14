import { Context } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';

/**
 * `updateCustomer` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
  */
export const changePassword = async (context: Context,
  params: {
    currentPassword: string,
    newPassword: string
 }): Promise<User> => {
  const { newPassword } = params;

  const response = await context.$bigcommerce.api.updateCustomer({
    authentication: {
      new_password: newPassword
    }
  });
  return response?.data?.[0];
};

