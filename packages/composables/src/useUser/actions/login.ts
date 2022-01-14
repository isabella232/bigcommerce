import { CustomersIncludeEnum, User, STORAGE_KEY_IS_LOGGED_IN } from '@vue-storefront/bigcommerce-api';
import { Context, UseUserLoginParams } from '../../types';
import { getCustomer } from './getCustomer';
import { loadCustomerCart } from '../../helpers/customer/loadCart';

/**
 * `logIn` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {UseUserLoginParams} params Parameters for `logIn` method in `useUser` composable.
 */
export const logIn = async (
  context: Context,
  params: UseUserLoginParams
): Promise<User> => {
  const { username, password } = params;
  const channelId =
    context?.$bigcommerce?.config?.app?.$config?.theme?.channelIds[0] || 1;
  const loginResponse = await context.$bigcommerce.api.loginCustomer({
    email: username,
    password,
    channel_id: channelId
  });
  if (!loginResponse.is_valid) {
    throw new Error(loginResponse.errorMessage);
  }

  const id = loginResponse.customer_id;
  const customer = await getCustomer(context, {
    'id:in': [id],
    include: CustomersIncludeEnum.Formfields
  });

  if (!customer) return customer;

  const formFields = await loadCustomerCart(context, customer);
  if (formFields) {
    customer.form_fields = formFields;
  }

  sessionStorage.setItem(STORAGE_KEY_IS_LOGGED_IN, '1');
  return customer;
};
