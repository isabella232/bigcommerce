import {
  CustomersIncludeEnum,
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/bigcommerce-api';
import { getCustomerAddress } from './getCustomerAddress';
import { getUserId } from '../../helpers/user';
import { UseUserShippingFactoryParams } from '@vue-storefront/core';
import { Context } from '../..';

export const load: UseUserShippingFactoryParams<
  Address,
  AddressItem
>['load'] = async (context: Context) => {
  const customerId = getUserId(context);

  if (customerId) {
    return await getCustomerAddress(context, {
      include: CustomersIncludeEnum.Formfields
    });
  }

  return [];
};
