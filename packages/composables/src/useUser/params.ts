import { User } from '@vue-storefront/bigcommerce-api';
import {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types/useUser';
import {
  register,
  load,
  logIn,
  logOut,
  changePassword,
  updateCustomer as updateUser
} from './actions';
import { useCart } from '../useCart';
import { UseUserFactoryParams } from '@vue-storefront/core';

/**
 * Parameter object for `useUserFactory`.
 */
const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  provide() {
    return {
      cart: useCart()
    };
  },

  load,

  logOut,

  updateUser,

  register,

  logIn,

  changePassword

};

export default params;
