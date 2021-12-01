/**
 * Format of customer data that's returned inside the response of `/customers` BigCommerce API endpoint.
 * See at {@link CreateCustomerResponse}
 */
export type CustomerData = {
  id: number;
  authentication: {
    force_password_reset: boolean;
  };
  company: string;
  customer_group_id: number;
  email: string;
  first_name: string;
  last_name: string;
  notes: string;
  phone: string;
  registration_ip_address: string;
  tax_exempt_category: string;
  date_created: string;
  date_modified: string;
  accepts_product_review_abandoned_cart_emails: boolean;
  store_credit_amounts: Array<{
    amount: number;
  }>;
  channel_ids: unknown;
};

/**
 * Format of response returned by `/customers` BigCommerce API endpoint.
 */
export type CreateCustomerResponse = {
  data: Array<CustomerData>;
  meta: unknown;
};

/**
 * Format of response returned by `/customers/validate-credentials` BigCommerce API endpoint.
 */
export type ValidateCredentialsResponse = {
  customer_id?: number | null;
  is_valid?: boolean;
};

/**
 * Format of the response returned by the `loginCustomer` endpoint in the api package.
 */
export type LoginCustomerResponse = {
  customer_id?: number | null;
  is_valid?: boolean;
  errorMessage?: string;
};
