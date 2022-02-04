import {
  Cart,
  CartIncludeEnum,
  CartItem,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import { Context } from '../../types';
import { getPurchasableDefaultVariant } from '../../helpers/product';

export const addItem: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['addItem'] = async (
  context: Context,
  { currentCart, product, quantity, customQuery }
) => {
  let variantId = customQuery?.variant_id
    ? Number.parseInt(customQuery.variant_id)
    : undefined;

  if (product.variants?.length && !variantId) {
    variantId = getPurchasableDefaultVariant(product)?.id;
  }

  const { data } = await context.$bigcommerce.api.addCartItems({
    cartId: currentCart.id,
    include: Object.values(CartIncludeEnum).join(',') as CartIncludeEnum,
    data: {
      line_items: [
        {
          product_id: product.id,
          quantity,
          variant_id: variantId
        }
      ]
    }
  });

  return data;
};
