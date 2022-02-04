import {
  CustomerFormField
} from '@vue-storefront/bigcommerce-api';

/**
 * Base params to modify customer.
 */
export interface BaseUserParams {
  /**
   * The first name of the customer.
   */
  firstName: string;
  /**
   * The last name of the customer.
   */
  lastName: string;
  /**
   * Customer email address.
   */
  email: string;
  /**
   * Customer password.
   */
  password: string;
  /**
   * It determines if the customer is signed up to receive product review or abandoned cart emails or recieve both emails.
   */
  acceptsMarketingEmails: boolean;
}

/**
 * Format of parameters to use when calling `register` method of `useUser` composable.
 */
export interface UseUserRegisterParams extends BaseUserParams {
  /**
   * Array of channels the customer can access.
   */
  channelIds: number[];
  /**
   * Customer custom fields.
   */
  customFields: CustomerFormField[];
}

/**
 * Parameters to login customer.
 */
export interface UseUserLoginParams {
  /**
   * Customer email address.
   */
  username: string;
  /**
   * Customer password.
   */
  password: string;
}

/**
 * Format of response to use when calling `logIn` method of `useUser` composable.
 */
export interface UseUserLoginResponse {
  id: number;
  email: string;
}

/**
 * Format of parameters to use when calling `updateUser` method of `useUser` composable.
 */
export interface UseUserUpdateParams extends Partial<BaseUserParams> {
  /**
   * The unique numeric ID of the customer.
   */
   id: number;
}
