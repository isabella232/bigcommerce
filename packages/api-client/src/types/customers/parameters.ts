import { CustomersIncludeEnum, CustomersSortEnum, FormField } from '.';

/**
 * Format of parameters that can be passed to `getCustomer` endpoint method.
 */
export type GetCustomerParameters = {
  /**
   * Page number
   */
  page?: number;
  /**
   * Items count per page. limit=50
   */
  limit?: number;
  /**
   * Filter items by ID.
   */
  'id:in'?: number[];
  /**
   * Filter items by company.
   */
  'company:in'?: string[];
  /**
   * Filter items by customer_group_id.
   */
  'customer_group_id:in'?: string[];
  /**
   * Filter items by date_created. date_created=2018-09-05T13:43:54
   */
  date_created?: string;
  /**
   * Filter items by maximum date_created. date_created:max=2018-09-10
   */
  'date_created:max'?: string;
  /**
   * Filter items by date_created. date_created:min=2018-09-05
   */
  'date_created:min'?: string;
  /**
   * Filter items by date_modified. date_modified=2018-09-05T13:45:03
   */
  date_modified?: string;
  /**
   * Filter items by mininum date_modified. date_modified:min=2019-09-04T:00:00:00 or date_modified:min=2019-09-04
   */
  'date_modified:min'?: string;
  /**
   * Filter items by maximum date_modified date_modified:max=2018-09-05T13:45:03 or date_modified:max=2019-09-04
   */
  'date_modified:max'?: string;
  /**
   * Filter items by email.
   */
  'email:in'?: string;
  /**
   * Filter items by first_name and last_name.
   */
  'name:in'?: string[];
  /**
   * Filter items by substring in first_name and last_name. name:like=moriarty, sherlock Concatenates the first_name and last_name fields.
   */
  'name:like'?: string[];
  /**
   * Filter items by registration_ip_address. If the customer was created using the API, then registration address is blank. registration_ip_address:in=12.345.6.789
   */
  'registration_ip_address:in'?: number[];
  include?: CustomersIncludeEnum;
  sort?: CustomersSortEnum;
};

/**
 * Format of parameters that can be passed to `createCustomer` endpoint method.
 */
export type CreateCustomerParameters = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  accepts_marketing_emails: boolean;
  channel_ids: number[];
  custom_fields: Array<{
    fieldId: string;
    fieldValue: string;
  }>;
  authentication?: {
    new_password?: string;
  };
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

/**
 * Format of parameters that can be passed to `updateCustomerFormFields` endpoint method.
 */
export type UpdateCustomerFormFieldsParameters = {
  data: FormField[];
};

/**
 * Format of parameters that can be passed to `updateCustomer` endpoint method.
 */
export type UpdateCustomerParameters = {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  company?: string;
  phone?: string;
  registration_ip_address?: string;
  notes?: string;
  customer_group_id?: number;
  tax_exempt_category?: string;
  authentication?: {
    force_password_reset?: boolean;
    new_password?: string;
  };
  accepts_product_review_abandoned_cart_emails?: boolean;
  store_credit_amounts?: Array<{
    amount: number;
  }>;
  channel_ids?: number[];
};
