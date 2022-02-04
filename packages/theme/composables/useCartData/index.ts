import {
  AgnosticPrice,
  AgnosticTotals,
  AgnosticAttribute
} from '@vue-storefront/core';
import type { Cart, CartItem } from '@vue-storefront/bigcommerce-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCartData = () => {
  const getItems = (cart: Cart): CartItem[] => {
    if (!cart) {
      return [];
    }

    return [
      ...cart.line_items.physical_items,
      ...cart.line_items.digital_items
    ];
  };

  const getItemName = (item: CartItem): string => {
    return item?.name ?? '';
  };

  const getItemImage = (item: CartItem): string => {
    return item?.image_url ?? '';
  };

  const getItemPrice = (item: CartItem): AgnosticPrice => {
    if (item && item.list_price !== item.sale_price) {
      return {
        regular: item.list_price,
        special: item.sale_price
      };
    }

    return {
      regular: item?.sale_price ?? 0
    };
  };

  const getItemQty = (item: CartItem): number => {
    return item?.quantity ?? 0;
  };

  const getItemAttributes = (
    item: CartItem,
    filterByAttributeName?: Array<string>
  ): Record<string, AgnosticAttribute | string> => {
    return (
      item?.options?.reduce((acc, attribute) => {
        if (!filterByAttributeName ||
        filterByAttributeName.includes(attribute.name)) {
          acc[attribute.name] = attribute.value;
        }

        return acc;
      }, {} as Record<string, string>) ?? {}
    );
  };

  function getItemSku(item: CartItem): string {
    return item?.sku ?? '';
  }

  const getTotals = (cart: Cart): AgnosticTotals => {
    return {
      total: cart?.base_amount ?? 0,
      subtotal: cart?.base_amount ?? 0,
      special: cart?.cart_amount ?? 0
    };
  };

  const getTotalItems = (cart: Cart): number => {
    return cart
      ? cart.line_items.physical_items.reduce((sum, item) => sum + item.quantity, 0) +
          cart.line_items.digital_items.reduce((sum, item) => sum + item.quantity, 0)
      : 0;
  };

  return {
    getTotals,
    getItems,
    getItemName,
    getItemImage,
    getItemPrice,
    getItemQty,
    getItemAttributes,
    getItemSku,
    getTotalItems
  };
};
