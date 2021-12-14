import { Context } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';

/**
 * `updateCustomer` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
  */
export const changePassword = async (context: Context,
  params: {
    currentUser: User,
    currentPassword: string,
    newPassword: string
 }): Promise<User> => {

  const id = params?.currentUser?.id;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentPassword, newPassword } = params;
  const response = await context.$bigcommerce.api.updateCustomer({
    id,
    authentication: {
      new_password: newPassword
    }
  });
  return response?.data?.[0];
};

