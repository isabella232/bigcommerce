import { GuestWishlist, GuestWishlistItem } from '../../types';

export const isInWishlist = (wishlist: GuestWishlist, wishlistItem: GuestWishlistItem): boolean => {
  if (!wishlist) return false;

  return wishlist.items.some(item => item.id === wishlistItem.id);
};
