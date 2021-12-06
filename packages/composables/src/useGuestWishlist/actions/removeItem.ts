import { Wishlist, WishlistItem, Context } from '../../types';
import { refreshWishlistProducts } from './helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';

export const removeItem = async (context: Context, wishlistItem: WishlistItem): Promise<Wishlist | null> => {
  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);

  if (!localStorageItem) {
    return null;
  }

  const guestWishlist: Wishlist = JSON.parse(localStorageItem);

  guestWishlist.items = guestWishlist.items.filter(item => item.id !== wishlistItem.id);

  refreshWishlistProducts(context, guestWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));

  return guestWishlist;
};
