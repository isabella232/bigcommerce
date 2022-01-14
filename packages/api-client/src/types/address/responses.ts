import { MetaCollection, UserAddress } from '..';

/**
 * Format of parameters that can be passed to `getCustomerAddress` endpoint method.
 */
export type GetAddressResponse = {
  data: Array<UserAddress>;
  meta: MetaCollection;
};

/**
 * Format of parameters that can be passed to `updateCustomerAddress` endpoint method.
 */
export type UpdateAddressResponse = GetAddressResponse;

/**
 * Format of parameters that can be passed to `createCustomerAddress` endpoint method.
 */
export type CreateAddressResponse = GetAddressResponse;

/**
 * Format of parameters that can be passed to `deleteCustomerAddress` endpoint method.
 */
export type DeleteAddressResponse = GetAddressResponse;
