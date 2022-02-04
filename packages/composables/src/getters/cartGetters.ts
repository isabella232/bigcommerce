import {
  CartGetters,
  AgnosticPrice,
  AgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute
} from '@vue-storefront/core';
import type { Cart, CartItem } from '@vue-storefront/bigcommerce-api';

function getItems(cart: Cart): CartItem[] {
  if (!cart) {
    return [];
  }

  return [...cart.line_items.physical_items, ...cart.line_items.digital_items];
}

function getItemName(item: CartItem): string {
  return item?.name ?? '';
}

function getItemImage(item: CartItem): string {
  return item?.image_url ?? '';
}

function getItemPrice(item: CartItem): AgnosticPrice {
  if (item && item.extended_list_price !== item.extended_sale_price) {
    return {
      regular: item.extended_list_price,
      special: item.extended_sale_price
    };
  }

  return {
    regular: item?.extended_sale_price ?? 0
  };
}

function getItemQty(item: CartItem): number {
  return item?.quantity ?? 0;
}

function getItemAttributes(item: CartItem, filterByAttributeName?: Array<string>): Record<string, AgnosticAttribute | string> {
  return (
    item?.options?.reduce((acc, attribute) => {
      if (!filterByAttributeName ||
      filterByAttributeName.includes(attribute.name)) {
        acc[attribute.name] = attribute.value;
      }

      return acc;
    }, {} as Record<string, string>) ?? {}
  );
}

function getItemSku(item: CartItem): string {
  return item?.sku ?? '';
}

function getTotals(cart: Cart): AgnosticTotals {
  return {
    total: cart.base_amount,
    subtotal: cart.base_amount,
    special: cart.cart_amount
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(cart: Cart): number {
  return 0;
}

function getTotalItems(cart: Cart): number {
  return cart
    ? cart.line_items.physical_items.length +
        cart.line_items.digital_items.length
    : 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoupons(cart: Cart): AgnosticCoupon[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscounts(cart: Cart): AgnosticDiscount[] {
  return [];
}

export const cartGetters: CartGetters<Cart, CartItem> = {
  getTotals,
  getShippingPrice,
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getDiscounts
};
