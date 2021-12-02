import { GuestWishlist, Context } from '../../types';
import { BIGCOMMERCE_GUEST_WISHLIST_ID } from '../../helpers/consts';
import { refreshWishlistProducts } from './helpers';

export const load = async (context: Context, name: string, isPublic = true): Promise<GuestWishlist> => {
  let guestWishlist: GuestWishlist = {
    name,
    items: [],
    wishlist_product_data: { data: [], meta: {} },
    is_public: isPublic
  };

  const localStorageItem = localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_ID);

  if (!localStorageItem) {
    localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_ID, JSON.stringify(guestWishlist));
    return guestWishlist;
  }

  guestWishlist = JSON.parse(localStorageItem);
  refreshWishlistProducts(context, guestWishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_ID, JSON.stringify(guestWishlist));

  return guestWishlist;
};
