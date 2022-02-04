import { AgnosticPrice, AgnosticTotals } from '@vue-storefront/core';
import {
  Wishlist,
  WishlistItem,
  WishlistItemParams
} from '@vue-storefront/bigcommerce';
import { InventoryType, Product } from '@vue-storefront/bigcommerce-api';
import { useProductData } from '../useProductData';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useWishlistData = () => {
  const { getVariant, getCoverImage, getPrice, getOptions } = useProductData();

  const getProduct = (
    wishlist: Wishlist,
    wishlistItem: WishlistItem
  ): Product => {
    if (!wishlist) return null;

    return wishlist.wishlist_product_data.data?.find(
      (item) => item.id === wishlistItem.product_id
    );
  };

  const getItems = (wishlist: Wishlist): WishlistItem[] => {
    return wishlist?.items || [];
  };

  const getItem = (
    wishlist: Wishlist,
    params: WishlistItemParams
  ): WishlistItem | undefined => {
    return wishlist?.items.find(
      (item) =>
        item.product_id === params.productId &&
        item.variant_id === params.variantId
    );
  };

  const getItemName = (wishlist: Wishlist, item: WishlistItem): string => {
    const product = getProduct(wishlist, item);
    return product?.name || '';
  };

  const getItemImage = (wishlist: Wishlist, item: WishlistItem): string => {
    const product = getProduct(wishlist, item);
    const variant = getVariant(product, item.variant_id);

    return product ? variant?.image_url || getCoverImage(product) : '';
  };

  const getItemPrice = (
    wishlist: Wishlist,
    item: WishlistItem
  ): AgnosticPrice => {
    const product = getProduct(wishlist, item);
    const variant = getVariant(product, item.variant_id);
    return product ? getPrice(product, variant) : { regular: null };
  };

  const getItemOptions = (
    wishlist: Wishlist,
    item: WishlistItem,
    filters?: string[]
  ): ReturnType<typeof getOptions> => {
    const product = getProduct(wishlist, item);
    return product ? getOptions(product, filters) : null;
  };

  const getItemSku = (wishlist: Wishlist, item: WishlistItem): string => {
    const product = getProduct(wishlist, item);
    return product?.sku || '';
  };

  const getItemQty = (wishlist: Wishlist, item: WishlistItem): number => {
    const product = getProduct(wishlist, item);
    const variant = getVariant(product, item.variant_id);
    return variant?.inventory_level || product?.inventory_level || 0;
  };

  const isItemPurchasable = (
    wishlist: Wishlist,
    item: WishlistItem
  ): boolean => {
    const product = getProduct(wishlist, item);
    const variant = getVariant(product, item.variant_id);

    switch (product.inventory_tracking) {
      case InventoryType.none:
        return true;
      case InventoryType.product:
        return product.inventory_level >= 1;
      case InventoryType.variant:
        if (!variant) return false;
        return variant.inventory_level >= 1;
    }
  };

  const getShippingPrice = (wishlist: Wishlist): number => {
    return (
      wishlist?.wishlist_product_data?.data.reduce((price, product) => {
        price += product.fixed_cost_shipping_price;
        return price;
      }, 0) || 0
    );
  };

  const getTotalItems = (wishlist: Wishlist): number => {
    return wishlist?.items?.length || 0;
  };

  const getTotals = (wishlist: Wishlist): AgnosticTotals => {
    const subtotal = wishlist?.items.reduce((sum, item) => {
      const product = getProduct(wishlist, item);
      const variant = getVariant(product, item.variant_id);
      const price = getPrice(product, variant);
      return sum + (price.special || price.regular || 0);
    }, 0);

    const shippingPrice = getShippingPrice(wishlist);

    const total = subtotal + shippingPrice;

    return {
      total,
      subtotal
    };
  };

  return {
    getItems,
    getTotals,
    getItemName,
    getItemImage,
    getItemPrice,
    getItemSku,
    getItemOptions,
    isItemPurchasable,
    getShippingPrice,
    getTotalItems,
    getItemQty,
    getItem,
    getProduct
  };
};
