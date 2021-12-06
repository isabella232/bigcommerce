import { Wishlist, Context } from '../../types';
import { refreshWishlistProducts } from './helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';

export const clear = async (context: Context): Promise<Wishlist | null> => {
  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);

  if (!localStorageItem) {
    return null;
  }

  const guestWishlist: Wishlist = JSON.parse(localStorageItem);

  guestWishlist.items = [];

  refreshWishlistProducts(context, guestWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));

  return guestWishlist;
};
