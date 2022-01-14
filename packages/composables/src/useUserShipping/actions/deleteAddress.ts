import { UseUserShippingFactoryParams } from '@vue-storefront/core';
import {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

export const deleteAddress: UseUserShippingFactoryParams<
  Address,
  AddressItem
>['deleteAddress'] = async (context: Context, { address, shipping }) => {
  await context.$bigcommerce.api.deleteCustomerAddress({
    'id:in': [address.id]
  });

  return shipping?.filter((a) => a.id !== address.id) ?? [];
};
