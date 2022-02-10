import { Context } from '../../types';
import {
  CustomersIncludeEnum,
  User
} from '@vue-storefront/bigcommerce-api';
import {
  BIGCOMMERCE_COOKIE_MAXAGE,
  BIGCOMMERCE_USER_AUTHENTICATED
} from '../../helpers/consts';
import { loadCustomerCart } from '../../helpers/customer/loadCart';
import { getCustomer } from './getCustomer';

/**
 * `load` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const load = async (context: Context): Promise<User> => {
  const cookies = context.$bigcommerce.config.app.$cookies;
  const customer = await getCustomer(context, {
    include: CustomersIncludeEnum.Formfields
  });

  if (customer) {
    const formFields = await loadCustomerCart(context, customer);

    if (formFields) {
      customer.form_fields = formFields;
    }

    cookies.set(BIGCOMMERCE_USER_AUTHENTICATED, '1', {
      path: '/',
      maxAge: BIGCOMMERCE_COOKIE_MAXAGE
    });

    return customer;
  }

  return null;
};
