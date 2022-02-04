import { Context } from '../../types';
import { load as loadCart } from '../../useCart/actions';
import {
  BIGCOMMERCE_USER_AUTHENTICATED
} from '../../helpers/consts';
/**
 * `logOut` method in `useUser` composable.
 * @param {Context} context An auto-generated value prepended to the method as a first parameter.
 */
export const logOut = async (context: Context): Promise<void> => {
  await context.$bigcommerce.api.logoutCustomer();
  const cookies = context.$bigcommerce.config.app.$cookies;

  const newCart = await loadCart(context, {});
  context.cart.setCart(newCart);
  cookies.remove(BIGCOMMERCE_USER_AUTHENTICATED);
  const { router, localePath } = context.$bigcommerce.config.app;
  router.push(localePath({ name: 'home' }));
};
