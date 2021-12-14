import { Context } from '../../types';
import {
  COOKIE_KEY_CUSTOMER_DATA,
  CustomersIncludeEnum,
  User
} from '@vue-storefront/bigcommerce-api';
import { loadCustomerCart } from '../../helpers/customer/loadCart';
import { getCustomer } from '../actions';
import jwt from 'jsonwebtoken';

/**
 * `load` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const load = async (context: Context): Promise<User> => {
  const loggedInCustomerToken = context.$bigcommerce.config.app.$cookies.get(
    COOKIE_KEY_CUSTOMER_DATA
  );

  if (loggedInCustomerToken) {
    const decodedToken = jwt.decode(loggedInCustomerToken);
    const id = decodedToken.customer.id;
    const customer = await getCustomer(context, {
      'id:in': [id],
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
