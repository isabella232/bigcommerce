import {
  GetAddressParameters,
  UserAddress
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';
import { logOut } from '../../useUser/actions/logout';

/**
 * `getCustomerAddress` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {GetAddressParameters} params Parameters for `getCustomerAddress` method in `useShipping` composable.
 */
export const getCustomerAddress = async (
  context: Context,
  params: GetAddressParameters
): Promise<UserAddress[]> => {
  try {
    const { data } = await context.$bigcommerce.api.getCustomerAddress(params);
    return data;
  } catch (error) {
    await logOut(context);
    return null;
  }
};
