import { UseUserShippingFactoryParams } from '@vue-storefront/core';
import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../..';

export const setDefaultAddress: UseUserShippingFactoryParams<Address, AddressItem>['setDefaultAddress'] = async (
  _context: Context,
  params
) => {
  // BigCommerce API currently not supporting to mark an address as default.
  return params.shipping as Address;

};

