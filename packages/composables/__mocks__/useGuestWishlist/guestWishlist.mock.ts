import { Wishlist } from '../../src/types';
import {
  BIGCOMMERCE_GUEST_WISHLIST_ID,
  BIGCOMMERCE_GUEST_CUSTOMER_ID,
  BIGCOMMERCE_GUEST_WISHLIST_TOKEN
} from '../../src/helpers/consts';

export const guestWishlistMock: Wishlist = {
  id: BIGCOMMERCE_GUEST_WISHLIST_ID,
  customer_id: BIGCOMMERCE_GUEST_CUSTOMER_ID,
  token: BIGCOMMERCE_GUEST_WISHLIST_TOKEN,
  name: 'Guest Wishlist',
  items: [],
  wishlist_product_data: { data: [], meta: {} },
  is_public: true
};
