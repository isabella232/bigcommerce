import { Context, Wishlist, WishlistParams } from '../../types';

export const emptyWishlistResponse: Wishlist['wishlist_product_data'] = {
  data: [],
  meta: {
    pagination: {
      total: 0,
      count: 0,
      per_page: 50,
      current_page: 1,
      total_pages: 0,
      links: {
        current: '?id%3Ain=&include=variants%2Cimages&is_visible=true&page=1&limit=50'
      }
    }
  }
};

export const refreshWishlistProducts = async (context: Context, wishlist: Wishlist): Promise<void> => {
  if (!wishlist.items?.length) {
    wishlist.wishlist_product_data = emptyWishlistResponse;
    return;
  }

  const productsRes = await context.$bigcommerce.api.getProducts({
    'id:in': wishlist.items.map(item => item.product_id),
    include: 'variants'
  });
  wishlist.wishlist_product_data = productsRes;
};

export const isInWishlist = (wishlist: Wishlist, wishlistParams: WishlistParams): boolean => {
  if (!wishlist) return false;

  return wishlist.items.some(item =>
    item.product_id === wishlistParams.productId && item.variant_id === wishlistParams.variantId
  );
};
