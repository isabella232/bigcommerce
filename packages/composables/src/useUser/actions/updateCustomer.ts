import { Context, UseUserUpdateParams } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';

/**
 * `updateCustomer` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {UseUserUpdateParams} params Parameters for `updateCustomer` method in `useUser` composable.
 */
export const updateCustomer = async (
  context: Context,
  params: {
    currentUser: User,
    updatedUserData: UseUserUpdateParams
  }
): Promise<User> => {

  const { firstName, lastName, email } = params?.updatedUserData;
  const id = params?.currentUser?.id;
  const updatedCustomerData = await context.$bigcommerce.api.updateCustomer({
    id,
    first_name: firstName,
    last_name: lastName,
    email
  });

  return updatedCustomerData.data[0];
};
