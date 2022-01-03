import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist, WishlistItem, Context } from '../../types';
import {
  refreshWishlistProducts,
  BIGCOMMERCE_GUEST_WISHLIST_KEY
} from '../../helpers';

export const removeItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['removeItem'] = async (
  context: Context,
  { currentWishlist, product: wishlistItem }
) => {
  currentWishlist.items = currentWishlist.items.filter(item => item.id !== wishlistItem.id);

  currentWishlist.wishlist_product_data = await refreshWishlistProducts(context, currentWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(currentWishlist));

  return currentWishlist;
};
