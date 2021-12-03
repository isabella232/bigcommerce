import {
  Cart,
  CartItem,
  COOKIE_KEY_CART_ID,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import { BIGCOMMERCE_COOKIE_MAXAGE } from '../../helpers/consts';

export const load: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['load'] = async (context) => {
  const cartId = context.$bigcommerce.config.app.$cookies.get(
    COOKIE_KEY_CART_ID
  );

  if (!cartId) {
    const { data } = await context.$bigcommerce.api.createCart({
      data: {
        line_items: []
      }
    });

    context.$bigcommerce.config.app.$cookies.set(COOKIE_KEY_CART_ID, data.id, {
      path: '/',
      maxAge: BIGCOMMERCE_COOKIE_MAXAGE
    });

    return data;
  }

  const { data } = await context.$bigcommerce.api.getCart({
    id: cartId,
    include:
      'line_items.physical_items.options,line_items.digital_items.options'
  });

  return data;
};
