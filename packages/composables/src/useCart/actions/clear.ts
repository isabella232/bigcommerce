import {
  Cart,
  CartItem,
  COOKIE_KEY_CART_ID,
  COOKIE_KEY_EMBEDDED_CHECKOUT_URL,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import { Context } from '../../types';
import { load } from './load';

export const clear: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['clear'] = async (context: Context, { currentCart }) => {
  await context.$bigcommerce.api.deleteCart({
    id: currentCart.id
  });

  context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_CART_ID);
  context.$bigcommerce.config.app.$cookies.remove(
    COOKIE_KEY_EMBEDDED_CHECKOUT_URL
  );

  return await load(context, {});
};
