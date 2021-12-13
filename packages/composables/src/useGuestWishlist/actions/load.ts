import { Wishlist, Context } from '../../types';
import {
  BIGCOMMERCE_GUEST_WISHLIST_ID,
  BIGCOMMERCE_GUEST_CUSTOMER_ID,
  BIGCOMMERCE_GUEST_WISHLIST_KEY,
  BIGCOMMERCE_GUEST_WISHLIST_TOKEN
} from '../../helpers/consts';
import { refreshWishlistProducts, emptyWishlistResponse } from '../../helpers';

export const load = async (context: Context, name: string, isPublic = true): Promise<Wishlist> => {
  let guestWishlist: Wishlist = {
    id: BIGCOMMERCE_GUEST_WISHLIST_ID,
    name,
    customer_id: BIGCOMMERCE_GUEST_CUSTOMER_ID,
    items: [],
    wishlist_product_data: emptyWishlistResponse,
    is_public: isPublic,
    token: BIGCOMMERCE_GUEST_WISHLIST_TOKEN
  };

  const localStorageItem = window.localStorage.getItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);

  if (!localStorageItem) {
    window.localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));
    return guestWishlist;
  }

  guestWishlist = JSON.parse(localStorageItem);
  await refreshWishlistProducts(context, guestWishlist);
  window.localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(guestWishlist));

  return guestWishlist;
};
