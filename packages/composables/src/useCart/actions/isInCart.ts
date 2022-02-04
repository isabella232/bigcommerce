import { getPurchasableDefaultVariant } from '../../helpers/product';
import { Cart, CartItem, Product } from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';

export const isInCart: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['isInCart'] = (_context, { currentCart, product }) => {
  let variantId = 0;

  if (!currentCart) return false;

  if (product.variants?.length) {
    variantId = getPurchasableDefaultVariant(product)?.id ?? 0;
  }

  return [
    ...currentCart.line_items.digital_items,
    ...currentCart.line_items.physical_items
  ].some(
    (item) =>
      item.product_id === product.id &&
      (!variantId || item.variant_id === variantId)
  );
};
