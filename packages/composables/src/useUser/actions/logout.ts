import {
  COOKIE_KEY_CUSTOMER_DATA,
  COOKIE_KEY_SHOP_SESSION_TOKEN,
  COOKIE_KEY_SHOPPER_PREF
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';
import { load as loadCart } from '../../useCart/actions';
/**
 * `logOut` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const logOut = async (context: Context): Promise<void> => {
  context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_CUSTOMER_DATA);
  context.$bigcommerce.config.app.$cookies.remove(
    COOKIE_KEY_SHOP_SESSION_TOKEN
  );
  context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_SHOPPER_PREF);

  const newCart = await loadCart(context, {});
  context.cart.setCart(newCart);
};
