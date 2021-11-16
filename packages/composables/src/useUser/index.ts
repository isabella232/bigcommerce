import { useUserFactory } from '@vue-storefront/core';
import type { User } from '@vue-storefront/bigcommerce-api';
import {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types/useUser';

import params from './params';

/**
 * `useUser` composable function.
 */
export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
