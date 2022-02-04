import { GetCustomersParameters, User } from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';
import { logOut } from '.';

/**
 * `getCustomer` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {GetCustomersParameters} params Parameters for `getCustomer` method in `useUser` composable.
 */
export const getCustomer = async (
  context: Context,
  params: GetCustomersParameters
): Promise<User> => {
  try {
    const { data } = await context.$bigcommerce.api.getCustomers(params);
    return data?.length ? data[0] : null;
  } catch (error) {
    await logOut(context);
    return null;
  }
};
