import {
  GetAddressParameters,
  UserAddress
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

/**
 * `getCustomerAddress` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {GetAddressParameters} params Parameters for `getCustomerAddress` method in `useShipping` composable.
 */
export const getCustomerAddress = async (
  context: Context,
  params: GetAddressParameters
): Promise<UserAddress[]> => {
  const { data } = await context.$bigcommerce.api.getCustomerAddress(params);
  return data;
};
