import { useCartFactory } from '@vue-storefront/core';
import { Cart, CartItem, Product } from '@vue-storefront/bigcommerce-api';
import { params } from './params';

export const useCart = useCartFactory<Cart, CartItem, Product>(params);
