import type { UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem } from '@vue-storefront/bigcommerce-api';
import { UseUserShippingFactoryParams } from '@vue-storefront/core';
import { Context } from '../../types';

export const addAddress: UseUserShippingFactoryParams<
Address,
AddressItem
>['addAddress'] = async (context: Context, { address, shipping }
) => {
  const { data } = await context.$bigcommerce.api.createCustomerAddress({ ...address });
  return [
    ...(shipping ?? []),
    ...(data ?? [])
  ];
};
