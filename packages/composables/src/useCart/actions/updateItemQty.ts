import { UseCartFactoryParams } from '@vue-storefront/core';
import {
  Cart,
  CartIncludeEnum,
  CartItem,
  Product
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

export const updateItemQty: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['updateItemQty'] = async (
  context: Context,
  { currentCart, product, quantity }
) => {
  const { data } = await context.$bigcommerce.api.updateCartItem({
    cartId: currentCart.id,
    itemId: product.id,
    include: `line_items.physical_items.options,line_items.digital_items.options,${CartIncludeEnum.RedirectUrls}` as CartIncludeEnum,
    data: {
      line_item: {
        quantity,
        product_id: product.product_id
      }
    }
  });

  return data;
};
