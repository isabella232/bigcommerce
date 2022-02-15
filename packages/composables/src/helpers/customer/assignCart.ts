import { Context } from '../../types';
import {
  CartIncludeEnum,
  CustomerIdFormField
} from '@vue-storefront/bigcommerce-api';
import { BIGCOMMERCE_USER_CART_KEY } from '../../helpers/consts';

export const assignCart = async (
  context: Context
): Promise<CustomerIdFormField[]> => {
  const cartId = context.cart.cart.value.id;

  const { data } = await context.$bigcommerce.api.updateCustomerFormFields({
    data: [
      {
        name:
          context.$bigcommerce.config.app.$config.theme?.userCartKey ||
          BIGCOMMERCE_USER_CART_KEY,
        value: cartId
      }
    ]
  });

  const { data: cart } = await context.$bigcommerce.api.updateCart({
    id: cartId,
    include: Object.values(CartIncludeEnum).join(',') as CartIncludeEnum
  });

  context.cart.setCart(cart);

  return data;
};
