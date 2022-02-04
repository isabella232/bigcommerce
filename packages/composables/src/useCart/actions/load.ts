import {
  Cart,
  CartIncludeEnum,
  CartItem,
  COOKIE_KEY_CART_ID,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import {
  BIGCOMMERCE_COOKIE_MAXAGE,
  BIGCOMMERCE_USER_CART_KEY
} from '../../helpers/consts';

export const load: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['load'] = async (context, { customQuery }) => {
  const cookies = context.$bigcommerce.config.app.$cookies;
  const cartId = cookies.get(COOKIE_KEY_CART_ID);
  const channelIds =
    context.$bigcommerce?.config?.app?.$config?.theme?.channelIds;
  const channelId =
    Array.isArray(channelIds) && channelIds.length ? channelIds[0] : null;

  const createCart = async () => {
    const { data } = await context.$bigcommerce.api.createCart({
      data: {
        customer_id: customQuery?.customerId,
        line_items: [],
        ...(channelId ? { channel_id: channelId } : {})
      },
      include: Object.values(CartIncludeEnum).join(',')
    });

    return data;
  };

  if (!cartId || customQuery?.forceNew) {
    const data = await createCart();

    // after the cart is cleared by a logged-in user the new cart should be assigned to the user
    if (customQuery?.customerId) {
      await context.$bigcommerce.api.updateCustomerFormFields({
        data: [
          {
            customer_id: customQuery.customerId,
            name:
              context.$bigcommerce.config.app.$config.theme?.userCartKey ||
              BIGCOMMERCE_USER_CART_KEY,
            value: data.id
          }
        ]
      });
    } else {
      cookies.set(COOKIE_KEY_CART_ID, data.id, {
        path: '/',
        maxAge: BIGCOMMERCE_COOKIE_MAXAGE
      });
    }

    return data;
  }

  try {
    const { data } = await context.$bigcommerce.api.getCart({
      id: cartId,
      include: Object.values(CartIncludeEnum).join(',')
    });

    return data;
  } catch (_) {
    const data = await createCart();

    cookies.set(COOKIE_KEY_CART_ID, data.id, {
      path: '/',
      maxAge: BIGCOMMERCE_COOKIE_MAXAGE
    });

    return data;
  }
};
