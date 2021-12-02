import { GuestWishlist, Context } from '../../types';
import { refreshWishlistProducts } from './helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_ID } from '../../helpers/consts';

export const clear = async (context: Context): Promise<GuestWishlist | null> => {
  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_ID);

  if (!localStorageItem) {
    return null;
  }

  const guestWishlist: GuestWishlist = JSON.parse(localStorageItem);

  guestWishlist.items = [];

  refreshWishlistProducts(context, guestWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_ID, JSON.stringify(guestWishlist));

  return guestWishlist;
};
