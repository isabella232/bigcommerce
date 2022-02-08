import { UseCartFactoryParams } from '@vue-storefront/core';
import { Cart, CartItem, Product } from '@vue-storefront/bigcommerce-api';
import { Context } from '../types';
import {
  addItem,
  clear,
  isInCart,
  load,
  removeItem,
  updateItemQty
} from './actions';

export const params: UseCartFactoryParams<Cart, CartItem, Product> = {
  load,
  addItem,
  removeItem,
  updateItemQty,
  clear,
  isInCart,

  /* eslint-disable @typescript-eslint/no-unused-vars */
  applyCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    console.log('Mocked: useCart.applyCoupon');
    return {
      updatedCart: {},
      updatedCoupon: {}
    };
  },

  removeCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    console.log('Mocked: useCart.removeCoupon');
    return {
      updatedCart: {}
    };
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
};
