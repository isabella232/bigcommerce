import { GuestWishlist, Context } from '../../types';
import { BIGCOMMERCE_GUEST_WISHLIST_ID } from '../../helpers/consts';

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
  const productsRes = await context.$bigcommerce.api.getProducts({
    'id:in': guestWishlist.items.map(item => item.product_id),
    include: 'variants'
  });
  guestWishlist.wishlist_product_data = productsRes;
  localStorage.setItem(BIGCOMMERCE_GUEST_WISHLIST_ID, JSON.stringify(guestWishlist));

  return guestWishlist;
};
