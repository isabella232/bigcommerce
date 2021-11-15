/**
 * Format of parameters that can be passed to `createCustomer` endpoint method.
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

/**
 * Format of parameters that can be passed to `validateCredentials` endpoint method.
 */
export type ValidateCredentialsParameter = {
  email: string;
  password: string;
  channel_id?: number;
};
