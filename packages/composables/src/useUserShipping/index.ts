import {
  useUserShippingFactory,
  UseUserShippingFactoryParams
} from '@vue-storefront/core';
import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/bigcommerce-api';
import { useUser } from '../useUser';
import { load, addAddress, deleteAddress, updateAddress, setDefaultAddress } from './actions';

const params: UseUserShippingFactoryParams<Address, AddressItem> = {
  provide() {
    return {
      user: useUser()
    };
  },
  addAddress,
  deleteAddress,
  updateAddress,
  load,
  setDefaultAddress
};

export const useUserShipping = useUserShippingFactory<Address, AddressItem>(params);
