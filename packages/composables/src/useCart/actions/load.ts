import {
  Cart,
  CartItem,
  COOKIE_KEY_CART_ID,
  COOKIE_KEY_EMBEDDED_CHECKOUT_URL,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import { BIGCOMMERCE_COOKIE_MAXAGE } from '../../helpers/consts';

export const load: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['load'] = async (context) => {
  const cookies = context.$bigcommerce.config.app.$cookies;
  const cartId = cookies.get(COOKIE_KEY_CART_ID);
  const channelIds =
    context.$bigcommerce?.config?.app?.$config?.theme?.channelIds;
  const channelId =
    Array.isArray(channelIds) && channelIds.length ? channelIds[0] : null;

  if (!cartId) {
    const { data } = await context.$bigcommerce.api.createCart({
      data: {
        line_items: [],
        ...(channelId ? { channel_id: channelId } : {})
      },
      include: 'redirect_urls'
    });

    cookies.set(COOKIE_KEY_CART_ID, data.id, {
      path: '/',
      maxAge: BIGCOMMERCE_COOKIE_MAXAGE
    });

    const storePreviewToken =
      context.$bigcommerce?.config?.app?.$config?.theme?.storePreviewToken;
    cookies.set(
      COOKIE_KEY_EMBEDDED_CHECKOUT_URL,
      `${data.redirect_urls.embedded_checkout_url}${
        storePreviewToken ? `&guestTkn=${storePreviewToken}` : ''
      }`,
      {
        path: '/',
        maxAge: BIGCOMMERCE_COOKIE_MAXAGE
      }
    );
    return data;
  }

  const { data } = await context.$bigcommerce.api.getCart({
    id: cartId,
    include:
      'line_items.physical_items.options,line_items.digital_items.options'
  });

  return data;
};
