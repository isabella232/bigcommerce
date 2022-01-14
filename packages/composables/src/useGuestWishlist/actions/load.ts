import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist, Context, WishlistItem } from '../../types';
import {
  refreshWishlistProducts,
  emptyProductsResponse,
  BIGCOMMERCE_GUEST_WISHLIST_ID,
  BIGCOMMERCE_GUEST_CUSTOMER_ID,
  BIGCOMMERCE_GUEST_WISHLIST_KEY,
  BIGCOMMERCE_GUEST_WISHLIST_TOKEN
} from '../../helpers';

export const load: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['load'] = async (
  context: Context
) => {
  let guestWishlist: Wishlist = {
    id: BIGCOMMERCE_GUEST_WISHLIST_ID,
    name: context.$bigcommerce.config.app.$config
      .theme.wishlist.guest.name,
    customer_id: BIGCOMMERCE_GUEST_CUSTOMER_ID,
    items: [],
    wishlist_product_data: emptyProductsResponse,
    is_public: context.$bigcommerce.config.app.$config
      .theme.wishlist.isPublic,
    token: BIGCOMMERCE_GUEST_WISHLIST_TOKEN
  };

  const localStorageItem = window.localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);

  if (!localStorageItem) {
    window.localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));
    return guestWishlist;
  }

  guestWishlist = JSON.parse(localStorageItem);
  guestWishlist.wishlist_product_data = await refreshWishlistProducts(context, guestWishlist);
  window.localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));

  return guestWishlist;
};
