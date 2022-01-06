import { BigcommerceIntegrationContext, Endpoints } from '../../../types';
import {
  COOKIE_KEY_CUSTOMER_DATA,
  COOKIE_KEY_SHOP_SESSION_TOKEN,
  COOKIE_KEY_SHOPPER_PREF
} from '../../../helpers/consts';

export const logoutCustomer: Endpoints['logoutCustomer'] = (
  context: BigcommerceIntegrationContext
) => {
  const {
    config: { secureCookies },
    res
  } = context;
  const cookieOptions = {
    httpOnly: secureCookies,
    secure: secureCookies,
    sameSite: secureCookies ? 'Strict' : 'Lax',
    maxAge: 0
  };
  res.cookie(COOKIE_KEY_CUSTOMER_DATA, '', cookieOptions);
  res.cookie(COOKIE_KEY_SHOP_SESSION_TOKEN, '', cookieOptions);
  res.cookie(COOKIE_KEY_SHOPPER_PREF, '', cookieOptions);
};
