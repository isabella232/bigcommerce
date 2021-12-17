import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { getDefaultVariant } from '../..';
import { emptyProductsResponse, refreshWishlistProducts } from '../../helpers';

export const addItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['addItem'] = async (
  context: Context,
  { currentWishlist, product }
) => {
  const productId = product.id;
  const variantId = getDefaultVariant(product)?.id;

  const res = await context.$bigcommerce.api.addWishlistItems({
    wishlistId: currentWishlist.id,
    items: [{ product_id: productId, variant_id: variantId }]
  });
  const wishlist = {
    ...res.data,
    wishlist_product_data: emptyProductsResponse
  };
  const productRes = await refreshWishlistProducts(context, wishlist);
  wishlist.wishlist_product_data = productRes;

  return wishlist;
};
