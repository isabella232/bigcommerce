import { CustomersIncludeEnum } from '../customers';

/**
 * Format of parameters that can be passed to `getCustomerAddress` endpoint method.
 */
export type GetAddressParameters = {
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
  include?: CustomersIncludeEnum;
};

/**
 * Format of parameters that can be passed to `createCustomerAddress` endpoint method.
 */
export type CreateAddressParameters = {
  address1: string;
  address2?: string;
  address_type?: string;
  city: string;
  company: string;
  country_code: string;
  customer_id: number;
  first_name: string;
  last_name: string;
  phone?: string;
  postal_code: string;
  state_or_province: string;
};

/**
 * Format of parameters that can be passed to `updateCustomerAddress` endpoint method.
 */
export type UpdateAddressParameters = Partial<CreateAddressParameters> & {
  id: number;
};

/**
 * Format of parameters that can be passed to `deleteCustomerAddress` endpoint method.
 */
export type DeleteAddressParameters = {
  /**
   * Delete items by ID.
   */
  'id:in'?: number[];
};
