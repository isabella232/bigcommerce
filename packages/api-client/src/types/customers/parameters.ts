import {
  CustomersIncludeEnum,
  CustomersSortEnum,
  FormField,
  Authentication
} from '..';

/**
 * Parameters to get customer.
 */
export interface GetCustomersParameters {
  /**
   * Page number.
   */
  page?: number;
  /**
   * Items count per page. limit=50.
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
   * Filter items by date_created. date_created=2018-09-05T13:43:54.
   */
  date_created?: string;
  /**
   * Filter items by maximum date_created. date_created:max=2018-09-10.
   */
  'date_created:max'?: string;
  /**
   * Filter items by date_created. date_created:min=2018-09-05.
   */
  'date_created:min'?: string;
  /**
   * Filter items by date_modified. date_modified=2018-09-05T13:45:03.
   */
  date_modified?: string;
  /**
   * Filter items by mininum date_modified. date_modified:min=2019-09-04T:00:00:00 or date_modified:min=2019-09-04.
   */
  'date_modified:min'?: string;
  /**
   * Filter items by maximum date_modified date_modified:max=2018-09-05T13:45:03 or date_modified:max=2019-09-04.
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
   * Filter items by registration_ip_address. If the customer was created using the API, then registration address is blank. registration_ip_address:in=12.345.6.789.
   */
  'registration_ip_address:in'?: number[];
  /**
   * Indicates whether to include customer sub-resources.
   */
  include?: CustomersIncludeEnum;
  /**
   * Sort items by date_created, date_modified, or last_name.
   */
  sort?: CustomersSortEnum;
}

/**
 * Customer form field.
 */
export interface CustomerFormField {
  /**
   * Form field ID.
   */
  fieldId: string;
  /**
   * Form field value.
   */
  fieldValue: string;
}

/**
 * Parameters to create customer.
 */
export interface CreateCustomerParameters {
  /**
   * The first name of the customer.
   */
  first_name: string;
  /**
   * The last name of the customer.
   */
  last_name: string;
  /**
   * The email of the customer. Must be unique.
   */
  email: string;
  /**
   * Customer password.
   */
  password: string;
  /**
   * It determines if the customer is signed up to receive product review or abandoned cart emails or recieve both emails.
   */
  accepts_product_review_abandoned_cart_emails: boolean;
  /**
   * Array of channels the customer can access.
   */
  channel_ids: number[];
  /**
   * Customer custom fields.
   */
  custom_fields: Array<CustomerFormField>;
  /**
   * Authentication information.
   */
  authentication?: Authentication;
}

/**
 * Parameters to authenticate customer.
 */
export interface AuthCustomerParams {
  /**
   * Customer email address.
   */
  email: string;
  /**
   * Customer password.
   */
  password: string;
  /**
   * ChannelId to check the customer credentials against.
   * If this field is empty BigCommerce will use channel 1
   */
  channel_id?: number;
}
/**
 * Parameters to validate credentials.
 * Type alias for `AuthCustomerParams`.
 */
export type ValidateCredentialsParameter = AuthCustomerParams;

/**
 * Parameters to login customer.
 * Type alias for `AuthCustomerParams`.
 */
export type LoginCustomerParameters = AuthCustomerParams

/**
 * Parameters to update customer form fields.
 */
export interface UpdateCustomerFormFieldsParameters {
  /**
   * Form fields.
   */
  data: FormField[];
}

/**
 * Type alias for store credit amount array.
 */
type StoreCreditAmounts = Array<{
  /**
   * Store credit amount.
   */
  amount: number;
}>

/**
 * Parameters to update customer.
 */
export interface UpdateCustomerParameters {
  /**
   * The first name of the customer.
   */
  first_name?: string;
  /**
   * The last name of the customer.
   */
  last_name?: string;
  /**
   * The email of the customer. Must be unique.
   */
  email?: string;
  /**
   * The company of the customer.
   */
  company?: string;
  /**
   * The phone number of the customer.
   */
  phone?: string;
  /**
   * The IP address from which this customer was registered.
   */
  registration_ip_address?: string;
  /**
   * The customer notes.
   */
  notes?: string;
  /**
   * ID of the group which this customer belongs to.
   */
  customer_group_id?: number;
  /**
   * The tax exempt category code for the customer.
   */
  tax_exempt_category?: string;
  /**
   * Authentication information.
   */
  authentication?: Authentication;
  /**
   * It determines if the customer is signed up to receive product review or abandoned cart emails or recieve both emails.
   */
  accepts_product_review_abandoned_cart_emails?: boolean;
  /**
   * Store credit.
   */
  store_credit_amounts?: StoreCreditAmounts;
  /**
   * Arrays of channels the customer can access.
   */
  channel_ids?: number[];
}
