import { WishlistItem } from '..';

type AddWishlistItem = Omit<WishlistItem, 'id'>;

export interface AddWishlistItemsParams {
  wishlistId: number,
  items: AddWishlistItem[]
}
