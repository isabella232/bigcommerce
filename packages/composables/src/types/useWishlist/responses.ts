import { ComputedRef } from '@nuxtjs/composition-api';
import { UseWishlistErrors } from '@vue-storefront/core';
import { Wishlist, WishlistItem, WishlistParams } from '.';

export interface UseWishlistResponse {
  wishlist: ComputedRef<Wishlist>,
  loading: ComputedRef<boolean>,
  error: ComputedRef<UseWishlistErrors>,
  load: (name: string, isPublic?: boolean) => Promise<void>,
  addItem: (wishlistActionParams: WishlistParams) => Promise<void>,
  removeItem: (wishlistItem: WishlistItem) => Promise<void>,
  clear: () => Promise<void>,
  isInWishlist: (wishlistActionParams: WishlistParams) => boolean
}
