import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { clear as guestClear } from '../../useGuestWishlist/actions';
import { BIGCOMMERCE_CREATE_WISHLIST_FAILED, getUserId, emptyProductsResponse } from '../../helpers';

export const clear: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['clear'] = async (
  context: Context,
  { currentWishlist }
) => {
  const customerId = getUserId(context);

  if (!customerId) {
    return guestClear(context, { currentWishlist });
  }

  await context.$bigcommerce.api.deleteWishlist(currentWishlist.id);

  if (!customerId) {
    throw new Error(BIGCOMMERCE_CREATE_WISHLIST_FAILED);
  }

  const res = await context.$bigcommerce.api.createWishlist({
    name: context.$bigcommerce.config.app
      .$config.theme.wishlist.name,
    is_public: context.$bigcommerce.config.app
      .$config.theme.wishlist.isPublic,
    items: []
  });

  const wishlist: Wishlist = {
    ...res.data,
    wishlist_product_data: emptyProductsResponse
  };

  return wishlist;
};
