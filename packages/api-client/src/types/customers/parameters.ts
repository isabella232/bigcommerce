/**
 * Format of parameters that can be passed to `createCustomer` endpoint method.
 */
export type CreateCustomerParameters = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  accepts_marketing_emails: boolean;
  custom_fields: Array<{
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

/**
 * Format of parameters that can be passed to `loginCustomer` endpoint method.
 */
export type LoginCustomerParameters = {
  email: string;
  password: string;
};
