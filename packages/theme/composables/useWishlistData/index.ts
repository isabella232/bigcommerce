import {
  AgnosticPrice,
  AgnosticTotals
} from '@vue-storefront/core';
import { Wishlist, WishlistItem } from '@vue-storefront/bigcommerce';
import { Product } from '@vue-storefront/bigcommerce-api';
import { useProductData } from '../useProductData';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useWishlistData = () => {
  const { getVariant, getCoverImage, getPrice, getOptions } = useProductData();

  const getProduct = (wishlist: Wishlist, wishlistItem: WishlistItem): Product => {
    if (!wishlist) return null;

    return wishlist.wishlist_product_data.data?.find(item => item.id === wishlistItem.product_id);
  };

  const getItems = (wishlist: Wishlist): WishlistItem[] => {
    return wishlist.items || [];
  };

  const getTotals = (wishlist: Wishlist): AgnosticTotals => {
    return {
      total: wishlist.items?.length || 0,
      subtotal: wishlist.items?.length || 0
    };
  };

  function getItemName(wishlist: Wishlist, item: WishlistItem): string {
    const product = getProduct(wishlist, item);
    return product.name || '';
  }

  function getItemImage(wishlist: Wishlist, item: WishlistItem): string {
    const product = getProduct(wishlist, item);
    return getCoverImage(product) ?? '';
  }

  function getItemPrice(wishlist: Wishlist, item: WishlistItem): AgnosticPrice {
    const product = getProduct(wishlist, item);
    const variant = getVariant(product, item.variant_id);
    return getPrice(product, variant) || { regular: null };
  }

  function getItemOptions(wishlist: Wishlist, item: WishlistItem, filters?: string[]): ReturnType<typeof getOptions> {
    const product = getProduct(wishlist, item);
    return getOptions(product, filters);
  }

  function getItemSku(wishlist: Wishlist, item: WishlistItem): string {
    const product = getProduct(wishlist, item);
    return product.sku || '';
  }

  function getShippingPrice(wishlist: Wishlist): number {
    return wishlist.wishlist_product_data?.data
      .map(product => product.fixed_cost_shipping_price)
      .reduce((price, currentPrice) => {
        price += currentPrice;
        return price;
      }, 0);
  }

  function getTotalItems(wishlist: Wishlist): number {
    return wishlist.items?.length || 0;
  }

  return {
    getItems,
    getTotals,
    getItemName,
    getItemImage,
    getItemPrice,
    getItemSku,
    getItemOptions,
    getShippingPrice,
    getTotalItems
  };
};
