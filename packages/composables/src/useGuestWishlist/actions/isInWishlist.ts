import { Wishlist, WishlistItem } from '../../types';

export const isInWishlist = (wishlist: Wishlist, wishlistItem: WishlistItem): boolean => {
  if (!wishlist) return false;

  return wishlist.items.some(item => item.id === wishlistItem.id);
};
