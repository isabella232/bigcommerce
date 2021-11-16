import { UseUserFactoryParams, Context } from '@vue-storefront/core';
import type { User } from '@vue-storefront/bigcommerce-api';
import {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types/useUser';
import { register } from './actions';

/**
 * Parameter object for `useUserFactory`.
 */
const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context): Promise<User> => {
    console.log('Mocked: useUser.load');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context): Promise<void> => {
    console.log('Mocked: useUser.logOut');
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }): Promise<User> => {
    console.log('Mocked: useUser.updateUser');
    return {};
  },

  register,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }): Promise<User> => {
    console.log('Mocked: useUser.logIn');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }): Promise<User> => {
    console.log('Mocked: useUser.changePassword');
    return {};
  }
};

export default params;
