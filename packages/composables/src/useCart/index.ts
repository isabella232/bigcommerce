import { useCartFactory } from '@vue-storefront/core';
import { Cart, CartItem, Product } from '@vue-storefront/bigcommerce-api';
import { params } from './params';

/**
 * Managing cart. Includes loading cart, adding and removing products and adding or removing discount coupons.
 */
export const useCart = useCartFactory<Cart, CartItem, Product>(params);
