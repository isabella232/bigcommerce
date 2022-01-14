import { Context, UseUserRegisterParams } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';
import { logIn } from './login';

/**
 * `register` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 * @param {UseUserRegisterParams} params Parameters for `register` method in `useUser` composable.
 */
export const register = async (
  context: Context,
  params: UseUserRegisterParams
): Promise<User> => {
  const {
    firstName,
    lastName,
    email,
    password,
    acceptsMarketingEmails = false,
    customFields = [],
    channelIds = context.$bigcommerce.config.app.$config.theme.channelIds || [1]
  } = params;
  const result = await context.$bigcommerce.api.createCustomer({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    accepts_product_review_abandoned_cart_emails: acceptsMarketingEmails,
    channel_ids: channelIds,
    custom_fields: customFields
  });
  await logIn(context, { username: email, password });

  return result;
};
