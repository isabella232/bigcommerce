import { GuestWishlist, GuestWishlistItem, Context } from '../../types';
import { refreshWishlistProducts } from './helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_ID } from '../../helpers/consts';

export const addItem = async (context: Context, wishlistItem: GuestWishlistItem): Promise<GuestWishlist | null> => {
  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_ID);

  if (!localStorageItem) {
    return null;
  }

  const guestWishlist: GuestWishlist = JSON.parse(localStorageItem);

  if (!guestWishlist.items.find(item => item.id === wishlistItem.id)) {
    guestWishlist.items.push(wishlistItem);
    refreshWishlistProducts(context, guestWishlist);
    localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_ID, JSON.stringify(guestWishlist));
  }

  return guestWishlist;
};
