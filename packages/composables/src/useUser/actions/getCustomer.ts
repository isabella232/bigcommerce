import { GetCustomerParameters, User } from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

/**
 * `getCustomer` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {GetCustomerParameters} params Parameters for `getCustomer` method in `useUser` composable.
 */
export const getCustomer = async (
  context: Context,
  params: GetCustomerParameters
): Promise<User> => {
  const { data } = await context.$bigcommerce.api.getCustomers(params);
  return data?.length ? data[0] : null;
};
