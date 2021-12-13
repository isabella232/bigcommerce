import { Wishlist, WishlistParams, Context } from '../../types';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';
import { isInWishlist, refreshWishlistProducts } from '../../helpers';

export const addItem = async (context: Context, wishlist: Wishlist, params: WishlistParams): Promise<Wishlist | null> => {
  if (!isInWishlist(wishlist, params)) {
    wishlist.items.push({
      id: `${params.productId}_${params.variantId}`,
      product_id: params.productId,
      variant_id: params.variantId
    });
    await refreshWishlistProducts(context, wishlist);
    localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(wishlist));
  }

  return wishlist;
};
