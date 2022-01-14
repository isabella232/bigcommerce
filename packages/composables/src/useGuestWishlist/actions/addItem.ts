import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistParams, Context, WishlistItem } from '../../types';
import {
  isInWishlist,
  refreshWishlistProducts,
  getDefaultVariant,
  BIGCOMMERCE_GUEST_WISHLIST_KEY
} from '../../helpers';

export const addItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['addItem'] = async (
  context: Context,
  { currentWishlist, product }
) => {
  const variantId = getDefaultVariant(product)?.id;
  const params: WishlistParams = { productId: product.id, variantId };

  if (!isInWishlist(currentWishlist, params)) {
    currentWishlist.items.push({
      id: `${params.productId}_${params.variantId}`,
      product_id: params.productId,
      variant_id: params.variantId
    });
    currentWishlist.wishlist_product_data = await refreshWishlistProducts(context, currentWishlist);
    localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(currentWishlist));
  }

  return currentWishlist;
};
