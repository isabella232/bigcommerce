import { UseUserFactoryParams } from '@vue-storefront/core';
import { Context } from '../types';
import type { User } from '@vue-storefront/bigcommerce-api';
import {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types/useUser';
import { register, logIn, getCustomer } from './actions';
import { useCart } from '../useCart';
import {
  COOKIE_KEY_CUSTOMER_DATA
} from '@vue-storefront/bigcommerce-api';
import jwt from 'jsonwebtoken';

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
      return await getCustomer(context, {'id:in': [id]});
    }

    return null;
  },

  logOut: async (context: Context): Promise<void> => {
    context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_CUSTOMER_DATA);
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
