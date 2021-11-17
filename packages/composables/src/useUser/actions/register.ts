import { Context, UseUserRegisterParams } from '../../types';
import type { User } from '@vue-storefront/bigcommerce-api';

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
    acceptsMarketingEmails = true,
    customFields = []
  } = params;

  /* eslint-disable camelcase */
  const result = await context.$bigcommerce.api.createCustomer({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    accepts_marketing_emails: acceptsMarketingEmails,
    custom_fields: customFields
  });

  return result;
};
