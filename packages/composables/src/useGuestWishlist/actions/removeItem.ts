import { Wishlist, WishlistItem, Context } from '../../types';
import { refreshWishlistProducts } from '../../helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';

export const removeItem = async (context: Context, wishlist: Wishlist, wishlistItem: WishlistItem): Promise<Wishlist | null> => {
  wishlist.items = wishlist.items.filter(item => item.id !== wishlistItem.id);

  await refreshWishlistProducts(context, wishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(wishlist));

  return wishlist;
};
