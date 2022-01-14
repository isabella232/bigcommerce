import { isInWishlist } from '../useWishlist/actions';
import { load, addItem, removeItem, clear } from './actions';

export const params = {
  load,
  addItem,
  removeItem,
  clear,
  isInWishlist
};
