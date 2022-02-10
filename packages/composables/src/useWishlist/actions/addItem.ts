import {
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { Product } from '@vue-storefront/bigcommerce-api';
import { Context, Wishlist, WishlistItem } from '../../types';
import { addItem as guestAddItem } from '../../useGuestWishlist/actions';
import {
  getPurchasableDefaultVariant,
  emptyProductsResponse,
  getUserId,
  refreshWishlistProducts
} from '../../helpers';

export const addItem: UseWishlistFactoryParams<Wishlist, WishlistItem, Product>['addItem'] = async (
  context: Context,
  { currentWishlist, product }
) => {
  const customerId = getUserId(context);

  if (!customerId) {
    return guestAddItem(context, { currentWishlist, product });
  }

  const productId = product.id;
  const variantId = getPurchasableDefaultVariant(product)?.id;

  const res = await context.$bigcommerce.api.addWishlistItems({
    wishlistId: currentWishlist.id,
    items: [{ product_id: productId, variant_id: variantId }]
  });
  const wishlist = {
    ...res.data,
    wishlist_product_data: emptyProductsResponse
  };
  const productRes = await refreshWishlistProducts(context, wishlist);
  wishlist.wishlist_product_data = productRes;

  return wishlist;
};
