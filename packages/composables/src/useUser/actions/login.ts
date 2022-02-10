import { CustomersIncludeEnum, User } from '@vue-storefront/bigcommerce-api';
import { Context, UseUserLoginParams } from '../../types';
import { getCustomer } from './getCustomer';
import { loadCustomerCart } from '../../helpers/customer/loadCart';
import {
  BIGCOMMERCE_COOKIE_MAXAGE,
  BIGCOMMERCE_USER_AUTHENTICATED
} from '../../helpers/consts';
/**
 * `logIn` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {UseUserLoginParams} params Parameters for `logIn` method in `useUser` composable.
 */
export const logIn = async (
  context: Context,
  params: UseUserLoginParams
): Promise<User> => {
  const cookies = context.$bigcommerce.config.app.$cookies;
  const { username, password } = params;
  const channelIdsConfig = context?.$bigcommerce?.config?.app?.$config?.theme?.channelIds;
  const channelId = Array.isArray(channelIdsConfig) && channelIdsConfig.length ? channelIdsConfig[0] : 1;
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

  cookies.set(BIGCOMMERCE_USER_AUTHENTICATED, '1', {
    path: '/',
    maxAge: BIGCOMMERCE_COOKIE_MAXAGE
  });
  return customer;
};
