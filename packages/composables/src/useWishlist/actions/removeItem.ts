import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { removeItem as guestRemoveItem } from '../../useGuestWishlist/actions';
import { refreshWishlistProducts, emptyProductsResponse, getUserId } from '../../helpers';

export const removeItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['removeItem'] = async (
  context: Context,
  { currentWishlist, product: wishlistItem }
) => {
  const customerId = getUserId(context);

  if (!customerId) {
    return guestRemoveItem(context, { currentWishlist, product: wishlistItem });
  }

  await context.$bigcommerce.api.removeWishlistItem({
    wishlistId: currentWishlist.id,
    itemId: Number(wishlistItem.id)
  });

  const wishlist = {
    ...currentWishlist,
    items: currentWishlist.items.filter(item => item.id !== wishlistItem.id),
    wishlist_product_data: emptyProductsResponse
  };

  wishlist.wishlist_product_data = await refreshWishlistProducts(context, wishlist);

  return wishlist;
};
