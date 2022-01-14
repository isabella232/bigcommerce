import { STORAGE_KEY_IS_LOGGED_IN } from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';
import { load as loadCart } from '../../useCart/actions';
/**
 * `logOut` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const logOut = async (context: Context): Promise<void> => {
  context.$bigcommerce.api.logoutCustomer();

  const newCart = await loadCart(context, {});
  context.cart.setCart(newCart);
  sessionStorage.removeItem(STORAGE_KEY_IS_LOGGED_IN);
};
