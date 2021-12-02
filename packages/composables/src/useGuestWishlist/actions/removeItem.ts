import { GuestWishlist, GuestWishlistItem, Context } from '../../types';
import { refreshWishlistProducts } from './helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_ID } from '../../helpers/consts';

export const removeItem = async (context: Context, wishlistItem: GuestWishlistItem): Promise<GuestWishlist | null> => {
  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_ID);

  if (!localStorageItem) {
    return null;
  }

  const guestWishlist: GuestWishlist = JSON.parse(localStorageItem);

  guestWishlist.items = guestWishlist.items.filter(item => item.id !== wishlistItem.id);

  refreshWishlistProducts(context, guestWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_ID, JSON.stringify(guestWishlist));

  return guestWishlist;
};
