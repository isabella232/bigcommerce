import { useUserFactory } from '@vue-storefront/core';
import type { User } from '@vue-storefront/bigcommerce-api';
import {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types/useUser';

import params from './params';

/**
 * Managing user sessions, authentication, registration and user details.
 */
export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
