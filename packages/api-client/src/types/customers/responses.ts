import {
  FormField,
  UserAddress,
  MetaCollection,
  Authentication
} from '..';

/**
 * Customer information.
 */
export interface User {
  /**
   * The unique numeric ID of the customer.
   */
  id?: number;
  /**
   * Authentication information.
   */
  authentication?: Authentication;
  /**
   * The company of the customer.
   */
  company?: string;
  /**
   * ID of the group which this customer belongs to.
   */
  customer_group_id?: number;
  /**
   * The email of the customer. Must be unique.
   */
  email: string;
  /**
   * The first name of the customer.
   */
  first_name: string;
  /**
   * The last name of the customer.
   */
  last_name: string;
  /**
   * The customer notes.
   */
  notes?: string;
  /**
   * The phone number of the customer.
   */
  phone?: string;
  /**
   * The IP address from which this customer was registered.
   */
  registration_ip_address?: string;
  /**
   * The tax exempt category code for the customer.
   */
  tax_exempt_category?: string;
  /**
   * The date of which the customer was created.
   */
  date_created?: string;
  /**
   * The date on which the customer was modified.
   */
  date_modified?: string;
  /**
   * It determines if the customer is signed up to receive product review or abandoned cart emails or recieve both emails.
   */
  accepts_product_review_abandoned_cart_emails?: boolean;
  /**
   * Store credit.
   */
  store_credit_amounts?: Array<{
    /**
     * Store credit amount.
     */
    amount: number;
  }>;
  /**
   * Array of channel ids the Customer has access to.
   */
  channel_ids?: number[];
  /**
   * Customer form fields.
   */
  form_fields?: FormField[];
  /**
   * Array of customer addresses. Limited to 10.
   */
  addresses?: UserAddress[];
  /**
   * Total number of customer addresses.
   */
  address_count?: number;
  /**
   * Total number of customer attributes.
   */
  attribute_count?: number;
}

/**
 * Create customer response.
 */
export interface CreateCustomerResponse {
  /**
   * Collection of customers.
   */
  data: Array<User>;
  /**
   * Data about the response, including pagination and collection totals.
   */
  meta: MetaCollection;
}

/**
 * Response of validate credentials.
 */
export interface ValidateCredentialsResponse {
  /**
   * The unique numeric ID of the customer.
   */
  customer_id?: number | null;
  /**
   * Indicates if the provided credentials are valid.
   */
  is_valid?: boolean;
}

/**
 * Response of login customer.
 */
export interface LoginCustomerResponse {
  /**
   * The unique numeric ID of the customer.
   */
  customer_id?: number | null;
  /**
   * Indicates if the provided credentials are valid.
   */
  is_valid?: boolean;
  /**
   * Error message.
   */
  errorMessage?: string;
}

/**
 * Customer collection response.
 */
export interface GetCustomersResponse {
  /**
   * Collection of customers.
   */
  data: Array<User>;
  /**
   * Data about the response, including pagination and collection totals.
   */
  meta: MetaCollection;
}

/**
 * Response of update customer form fields.
 */
export interface UpdateCustomerFormFieldsResponse {
  /**
   * Array of customer form fields.
   */
  data: FormField[];
  /**
   * Empty object.
   */
  meta: Record<string, never>;
}

/**
 * Format of parameters that can be passed to `updateCustomer` endpoint method.
 */
export interface UpdateCustomerResponse {
  /**
   * Customer information.
   */
  data: Array<User>;
  /**
   * Data about the response, including pagination and collection totals.
   */
  meta: MetaCollection;
}
