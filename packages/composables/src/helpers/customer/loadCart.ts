import {
  COOKIE_KEY_CART_ID,
  FormField,
  User
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';
import { assignCart } from './assignCart';
import { BIGCOMMERCE_USER_CART_KEY } from '../consts';

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
    // TODO: VBC-71 - merge the guest cart with the customer cart
    const { data } = await context.$bigcommerce.api.getCart({
      id: customerCartField.value as any,
      include: 'line_items.physical_items.options,line_items.digital_items.options' as any
    });
    context.cart.setCart(data);
  } else {
    return await assignCart(context, { currentUser: customer });
  }
};
