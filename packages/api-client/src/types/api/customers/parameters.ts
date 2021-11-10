/* eslint-disable camelcase */

/**
 * Format of parameters that can be passed to CreateCustomer endpoint method.
 */
export type CreateCustomerParameters = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  acceptsMarketingEmails: boolean;
  customFields: Array<{
    fieldId: string;
    fieldValue: string;
  }>;
};
