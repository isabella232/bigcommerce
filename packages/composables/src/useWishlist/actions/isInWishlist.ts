import { UseWishlistFactoryParams } from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import {
  getDefaultVariant,
  isInWishlist as isInWishlistHelper
} from '../../helpers';

export const isInWishlist: UseWishlistFactoryParams<
  Wishlist,
  WishlistItem,
  Product
>['isInWishlist'] = (_context: Context, { currentWishlist, product }) => {
  const productId = product.id;
  const variantId = getDefaultVariant(product)?.id;

  return isInWishlistHelper(currentWishlist, { productId, variantId });
};
