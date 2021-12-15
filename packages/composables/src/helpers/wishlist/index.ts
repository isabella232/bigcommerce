import { ProductsResponse } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem, WishlistParams } from '../../types';
import { BIGCOMMERCE_GUEST_WISHLIST_KEY } from '../../helpers/consts';

export const emptyProductsResponse: Wishlist['wishlist_product_data'] = {
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

export const refreshWishlistProducts = async (context: Context, wishlist: Wishlist): Promise<ProductsResponse> => {
  if (!wishlist.items?.length) {
    return emptyProductsResponse;
  }

  return await context.$bigcommerce.api.getProducts({
    'id:in': wishlist.items.map(item => item.product_id),
    include: 'variants'
  });
};

export const isInWishlist = (wishlist: Wishlist, wishlistParams: WishlistParams): boolean => {
  if (!wishlist) return false;

  return wishlist.items.some(item =>
    item.product_id === wishlistParams.productId && item.variant_id === wishlistParams.variantId
  );
};

export const mergeWishlists = async (
  context: Context,
  guestWishlist: Wishlist,
  wishlist: Wishlist
): Promise<Wishlist> => {
  const guestWishlistItems: WishlistItem[] = guestWishlist.items
    .map(item => ({
      product_id: item.product_id,
      variant_id: item.variant_id
    }));

  const mergedWishlistRes = await context.$bigcommerce.api
    .addWishlistItems({
      wishlistId: wishlist.id,
      items: guestWishlistItems
    });

  window.localStorage.removeItem(BIGCOMMERCE_GUEST_WISHLIST_KEY);

  return {
    ...wishlist,
    ...mergedWishlistRes.data
  };
};
