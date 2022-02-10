import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem, Context } from '../../types';
import {
  refreshWishlistProducts,
  BIGCOMMERCE_GUEST_WISHLIST_KEY
} from '../../helpers';

export const clear: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['clear'] = async (
  context: Context,
  { currentWishlist }
) => {
  currentWishlist.items = [];

  currentWishlist.wishlist_product_data = await refreshWishlistProducts(context, currentWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(currentWishlist));

  return currentWishlist;
};
