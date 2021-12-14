import {
  Cart,
  CartIncludeEnum,
  COOKIE_KEY_CART_ID,
  FormField,
  User
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';
import { assignCart } from '.';
import { BIGCOMMERCE_USER_CART_KEY } from '../consts';

const mergeCarts = async (
  context: Context,
  guestCart: Cart,
  userCart: Cart
) => {
  const { data } = await context.$bigcommerce.api.addCartItems({
    cartId: userCart.id,
    include: 'line_items.physical_items.options,line_items.digital_items.options' as CartIncludeEnum,
    data: {
      line_items: [
        ...guestCart.line_items.digital_items,
        ...guestCart.line_items.physical_items
      ]
    }
  });
  context.cart.setCart(data);
};

export const loadCustomerCart = async (
  context: Context,
  customer: User
): Promise<FormField[] | void> => {
  const userCartKey =
    context.$bigcommerce.config.app.$config.theme?.userCartKey ||
    BIGCOMMERCE_USER_CART_KEY;

  const customerCartField = customer.form_fields?.find(
    (formField) => formField.name === userCartKey
  );

  context.$bigcommerce.config.app.$cookies.remove(COOKIE_KEY_CART_ID);

  if (customerCartField?.value) {
    const guestCart: Cart = context.cart.cart.value;

    try {
      const { data: userCart } = await context.$bigcommerce.api.getCart({
        id: customerCartField.value as string,
        include: 'line_items.physical_items.options,line_items.digital_items.options' as CartIncludeEnum
      });

      if (
        !guestCart ||
        guestCart.customer_id ||
        guestCart.line_items.physical_items.length +
          guestCart.line_items.digital_items.length ===
          0
      ) {
        context.cart.setCart(userCart);
      } else {
        await mergeCarts(context, guestCart, userCart);
      }
    } catch (error) {
      return await assignCart(context, { currentUser: customer });
    }
  } else {
    return await assignCart(context, { currentUser: customer });
  }
};
