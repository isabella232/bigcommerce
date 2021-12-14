import { Context } from '../types';
import { UseUserFactoryParams } from '@vue-storefront/core';
import {
  COOKIE_KEY_CUSTOMER_DATA,
  CustomersIncludeEnum,
  User
} from '@vue-storefront/bigcommerce-api';
import {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types/useUser';
import { register, logIn, getCustomer } from './actions';
import { useCart } from '../useCart';
import jwt from 'jsonwebtoken';
import { loadCustomerCart } from '../helpers/customer/loadCart';
import { load as loadCart } from '../useCart/actions';

/**
 * Parameter object for `useUserFactory`.
 */
const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  provide() {
    return {
      cart: useCart()
    };
  },

  load: async (context: Context): Promise<User> => {
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
      if (formFields) {
        customer.form_fields = formFields;
      }

      return customer;
    }

    return null;
  },

  logOut: async (context: Context): Promise<void> => {
    context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_CUSTOMER_DATA);

    const newCart = await loadCart(context, {});
    context.cart.setCart(newCart);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }): Promise<User> => {
    console.log('Mocked: useUser.updateUser');
    return null;
  },

  register,

  logIn,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }): Promise<User> => {
    console.log('Mocked: useUser.changePassword');
    return null;
  }
};

export default params;
