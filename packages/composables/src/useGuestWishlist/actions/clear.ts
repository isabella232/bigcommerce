import { Wishlist, Context } from '../../types';
import { refreshWishlistProducts } from '../../helpers';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';

export const clear = async (context: Context, wishlist: Wishlist): Promise<Wishlist | null> => {
  wishlist.items = [];

  wishlist.wishlist_product_data = await refreshWishlistProducts(context, wishlist);
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(wishlist));

  return wishlist;
};
