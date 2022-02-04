import { FormField } from '..';

export * from './parameters';
export * from './responses';

/**
 * Customer address model.
 */
export interface UserAddress {
  /**
   * The first name of the customer address.
   */
  first_name: string;

  /**
   * The last name of the customer address.
   */
  last_name: string;

  /**
   * The company of the customer address.
   */
  company: string;

  /**
   * The address 1 line.
   */
  address1: string;

  /**
   * The address 2 line.
   */
  address2?: string;

  /**
   * The city of the customer address.
   */
  city: string;

  /**
   * The state or province name.
   */
  state_or_province: string;

  /**
   * The postal code of the customer address.
   */
  postal_code: string;

  /**
   * The country code of the customer address.
   */
  country_code: string;

  /**
   * The phone number of the customer address.
   */
  phone: string;

  /**
   * The address type.
   */
  address_type?: string;

  /**
   * The customer ID.
   */
  customer_id: number;

  /**
   * The unique numeric ID of the address.
   */
  id: number;

  /**
   * The country name of the customer address.
   */
  country: string;

  /**
   * Array of form fields.
   */
  form_fields?: Array<FormField>;
}

/**
 * Type alias for an array of customer addresses.
 */
export type UserShippingAddress = UserAddress[];

/**
 * Type alias a customer addresses.
 */
export type UserShippingAddressItem = UserAddress;

/**
 * User address search criteria.
 */
export type UserShippingAddressSearchCriteria = UserAddress;
