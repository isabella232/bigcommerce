import { CustomersIncludeEnum } from '../customers';

/**
 * Format of parameters that can be passed to `getCustomerAddress` endpoint method.
 */
export interface GetAddressParameters {
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
   * Filter items by customer ID.
   */
  'customer_id:in'?: number[];
  /**
   * Filter items by company.
   */
  'company:in'?: string[];
  /**
   * Filter items by first_name and last_name.
   */
  'name:in'?: string[];

  /**
   * Indicates whether to include customer address sub-resources.
   */
  include?: CustomersIncludeEnum;
}

/**
 * Format of parameters that can be passed to `createCustomerAddress` endpoint method.
 */
export interface CreateAddressParameters {
  /**
   * The address 1 line.
   */
  address1: string;

  /**
   * The address 2 line.
   */
  address2?: string;

  /**
   * The address type.
   */
  address_type?: string;

  /**
   * The city of the customer address.
   */
  city: string;

  /**
   * The company of the customer address.
   */
  company: string;

  /**
   * The country code of the customer address.
   */
  country_code: string;

  /**
   * The customer ID.
   */
  customer_id: number;

  /**
   * The first name of the customer address.
   */
  first_name: string;

  /**
   * The last name of the customer address.
   */
  last_name: string;

  /**
   * The phone number of the customer address.
   */
  phone?: string;

  /**
   * The postal code of the customer address.
   */
  postal_code: string;

  /**
   * The state or province name spelled out in full. State or province codes not accepted.
   */
  state_or_province: string;
}

/**
 * Necessary parameters to update a customer address.
 */
export interface UpdateAddressParameters extends Partial<CreateAddressParameters> {
  /**
   * The unique numeric ID of the address.
   */
  id: number;
}

/**
 * Necessary parameters to delete a customer addresses.
 */
export interface DeleteAddressParameters {
  /**
   * Array of unique numeric IDs of addresses.
   */
  'id:in'?: number[];
}
