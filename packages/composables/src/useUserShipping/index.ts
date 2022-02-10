import {
  useUserShippingFactory
} from '@vue-storefront/core';
import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/bigcommerce-api';
import { params } from './params';

/**
 * Managing shipping addresses.
 */
export const useUserShipping = useUserShippingFactory<Address, AddressItem>(params);
