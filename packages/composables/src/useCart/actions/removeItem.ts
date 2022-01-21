import {
  Cart,
  CartIncludeEnum,
  CartItem,
  COOKIE_KEY_CART_ID,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import { Context } from '../../types';
import { load } from './load';

export const removeItem: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['removeItem'] = async (context: Context, { currentCart, product }) => {
  const { data } = await context.$bigcommerce.api.removeCartItem({
    cartId: currentCart.id,
    itemId: product.id,
    include: Object.values(CartIncludeEnum).join(',') as CartIncludeEnum
  });

  if (!data) {
    context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_CART_ID);

    // no item remained in the cart, so it is deleted automatically and have to create a new cart
    return await load(context, {
      customQuery: { customerId: currentCart.customer_id }
    });
  }

  return data;
};
