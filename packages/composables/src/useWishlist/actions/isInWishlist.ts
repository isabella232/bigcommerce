import { UseWishlistFactoryParams } from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import {
  getPurchasableDefaultVariant,
  isInWishlist as isInWishlistHelper
} from '../../helpers';

export const isInWishlist: UseWishlistFactoryParams<
  Wishlist,
  WishlistItem,
  Product
>['isInWishlist'] = (_context: Context, { currentWishlist, product }) => {
  const productId = product.id;
  const variantId = getPurchasableDefaultVariant(product)?.id;

  return isInWishlistHelper(currentWishlist, { productId, variantId });
};
