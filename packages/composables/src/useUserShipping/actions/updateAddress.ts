import { UseUserShippingFactoryParams } from '@vue-storefront/core';
import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../..';

export const updateAddress: UseUserShippingFactoryParams<
Address,
AddressItem
>['updateAddress'] = async (context: Context, { address, shipping }
) => {
  const { data } = await context.$bigcommerce.api.updateCustomerAddress(address);
  return [
    ...(shipping?.filter(a => a.id !== address.id) ?? []),
    ...(data ?? [address])
  ];
};
