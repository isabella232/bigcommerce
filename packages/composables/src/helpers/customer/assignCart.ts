import { Context } from '../../types';
import {
  CartIncludeEnum,
  FormField,
  User
} from '@vue-storefront/bigcommerce-api';
import { BIGCOMMERCE_USER_CART_KEY } from '../../helpers/consts';

export const assignCart = async (
  context: Context,
  { currentUser }: { currentUser: User }
): Promise<FormField[]> => {
  const cartId = context.cart.cart.value.id;

  const { data } = await context.$bigcommerce.api.updateCustomerFormFields({
    data: [
      {
        customer_id: currentUser.id,
        name:
          context.$bigcommerce.config.app.$config.theme?.userCartKey ||
          BIGCOMMERCE_USER_CART_KEY,
        value: cartId
      }
    ]
  });

  const { data: cart } = await context.$bigcommerce.api.updateCart({
    id: cartId,
    include: `line_items.physical_items.options,line_items.digital_items.options,${CartIncludeEnum.RedirectUrls}` as CartIncludeEnum,
    data: {
      customer_id: currentUser.id
    }
  });

  context.cart.setCart(cart);

  return data;
};
