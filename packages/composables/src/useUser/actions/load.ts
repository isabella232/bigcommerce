import { Context } from '../../types';
import {
  CustomersIncludeEnum,
  User
} from '@vue-storefront/bigcommerce-api';
import { loadCustomerCart } from '../../helpers/customer/loadCart';
import { getCustomer } from './getCustomer';
import { getUserId } from '../../helpers';

/**
 * `load` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const load = async (context: Context): Promise<User> => {

  const customerId = getUserId(context);

  if (customerId) {
    const customer = await getCustomer(context, {
      'id:in': [customerId],
      include: CustomersIncludeEnum.Formfields
    });

    const formFields = await loadCustomerCart(context, customer);
    if (customer && formFields) {
      customer.form_fields = formFields;
    }

    return customer;
  }

  return null;
};
