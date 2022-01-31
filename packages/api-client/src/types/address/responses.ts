import { MetaCollection, UserAddress } from '..';

/**
 * Customer address collection response.
 */
export interface GetAddressResponse {
  /**
   * Collection of customer addresses.
   */
  data: Array<UserAddress>;

  /**
   * Data about the response, including pagination and collection totals.
   */
  meta: MetaCollection;
}

/**
 * Response of update customer address request.
 */
export type UpdateAddressResponse = GetAddressResponse;

/**
 * Response of create customer address request.
 */
export type CreateAddressResponse = GetAddressResponse;

/**
 * Response of delete customer address requests.
 */
export type DeleteAddressResponse = GetAddressResponse;
