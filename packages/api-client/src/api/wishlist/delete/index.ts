import {
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const deleteWishlist: Endpoints['deleteWishlist'] = async (
  context,
  wishlistId
) => {
  if (!wishlistId || typeof wishlistId !== 'number') {
    throw Error(`Wishlist id with value: ${wishlistId} is not valid. Use number value.`);
  }

  return await context.client.v3.delete(
    BigCommerceEndpoints.wishlists(wishlistId)
  );
};
