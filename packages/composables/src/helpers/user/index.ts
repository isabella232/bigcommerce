import jwt from 'jsonwebtoken';
import {
  COOKIE_KEY_CUSTOMER_DATA
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

export const getUserId = (context: Context): number => {
  const loggedInCustomerToken = context.$bigcommerce.config.app.$cookies.get(
    COOKIE_KEY_CUSTOMER_DATA
  );

  if (!loggedInCustomerToken) return 0;

  const decodedToken = jwt.decode(loggedInCustomerToken);
  const id = decodedToken.customer.id;
  return id;
};
