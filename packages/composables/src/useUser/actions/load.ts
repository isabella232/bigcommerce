import { Context } from '../../types';
import {
  CustomersIncludeEnum,
  User,
  STORAGE_KEY_IS_LOGGED_IN
} from '@vue-storefront/bigcommerce-api';
import { loadCustomerCart } from '../../helpers/customer/loadCart';
import { getCustomer } from './getCustomer';

/**
 * `load` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const load = async (context: Context): Promise<User> => {
  const customer = await getCustomer(context, {
    include: CustomersIncludeEnum.Formfields
  });

  const formFields = await loadCustomerCart(context, customer);
  if (customer) {
    if (formFields) {
      customer.form_fields = formFields;
    }

    sessionStorage.setItem(STORAGE_KEY_IS_LOGGED_IN, '1');
    return customer;
  }

  return null;
};
