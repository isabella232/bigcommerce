/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { refreshWishlistProducts, emptyProductsResponse } from '../../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const removeItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['removeItem'] = async (
  context: Context,
  { currentWishlist, product: wishlistItem }
) => {
  const res = await context.$bigcommerce.api.removeWishlistItem({
    wishlistId: currentWishlist.id,
    itemId: Number(wishlistItem.id)
  });

  const wishlist = {
    ...res.data,
    wishlist_product_data: emptyProductsResponse
  };

  wishlist.wishlist_product_data = await refreshWishlistProducts(context, wishlist);

  return wishlist;
};
