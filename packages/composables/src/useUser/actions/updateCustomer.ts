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
    updatedUserData: UseUserUpdateParams
  }
): Promise<User> => {

  const { firstName = undefined, lastName = undefined, email = undefined, acceptsMarketingEmails = undefined } = params.updatedUserData;
  const updatedCustomerData = await context.$bigcommerce.api.updateCustomer({
    ...(firstName && {first_name: firstName}),
    ...(lastName && {last_name: lastName}),
    ...(email && {email}),
    ...(typeof acceptsMarketingEmails !== 'undefined' && {accepts_product_review_abandoned_cart_emails: acceptsMarketingEmails})
  });

  return updatedCustomerData?.data?.[0];
};
