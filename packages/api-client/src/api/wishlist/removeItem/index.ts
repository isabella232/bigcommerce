import {
  WishlistResponse,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const removeWishlistItem: Endpoints['removeWishlistItem'] = async (
  context,
  params
) => {
  const { wishlistId, itemId } = params;

  if (!wishlistId || typeof wishlistId !== 'number') {
    throw Error(`Wishlist id with value: ${wishlistId} is not valid. Use number value.`);
  }

  if (!itemId || typeof itemId !== 'number') {
    throw Error(`Item id with value: ${itemId} is not valid. Use number value.`);
  }

  return context.client.delete<WishlistResponse>(
    BigCommerceEndpoints.wishlistItems(wishlistId, itemId)
  );
};
