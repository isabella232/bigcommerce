import { Wishlist, WishlistItem, Context } from '../../types';
import { refreshWishlistProducts } from './helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';

export const addItem = async (context: Context, wishlistItem: WishlistItem): Promise<Wishlist | null> => {
  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);

  if (!localStorageItem) {
    return null;
  }

  const guestWishlist: Wishlist = JSON.parse(localStorageItem);

  if (!guestWishlist.items.find(item => item.id === wishlistItem.id)) {
    guestWishlist.items.push(wishlistItem);
    refreshWishlistProducts(context, guestWishlist);
    localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));
  }

  return guestWishlist;
};
