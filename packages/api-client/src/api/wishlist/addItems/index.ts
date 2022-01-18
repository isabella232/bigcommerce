import {
  WishlistResponse,
  AddWishlistItemsParams,
  Endpoints
} from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

type AddWishlistItemsParamType = { items: AddWishlistItemsParams['items']};

export const addWishlistItems: Endpoints['addWishlistItems'] = async (
  context,
  params
) => {
  const { wishlistId, items } = params;

  if (!wishlistId || typeof wishlistId !== 'number') {
    throw Error(`Wishlist id with value: ${wishlistId} is not valid. Use number value.`);
  }

  if (!items || !items.length) {
    throw Error(`Wishlist items with value: ${items} are not valid. Use non-empty array of wishlist items.`);
  }

  const addWishlistItemParams = { items: params.items };

  return context.client.v3.post<WishlistResponse, AddWishlistItemsParamType>(
    BigCommerceEndpoints.wishlistItems(wishlistId),
    addWishlistItemParams
  );
};
