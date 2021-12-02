import { Context, GuestWishlist } from '../../../types';

export const refreshWishlistProducts = async (context: Context, wishlist: GuestWishlist): Promise<void> => {
  const productsRes = await context.$bigcommerce.api.getProducts({
    'id:in': wishlist.items.map(item => item.product_id),
    include: 'variants'
  });
  wishlist.wishlist_product_data = productsRes;
};
