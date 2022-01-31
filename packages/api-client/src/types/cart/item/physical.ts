import { CartItemBase } from './base';

/**
 * Purchesed items can be gift wrapped.
 */
interface GiftWrapping {
  /**
   * Name of the wrapping
   */
  name?: string;
  /**
   * Message for the gift
   */
  message?: string;
  /**
   * Amount of wrapping
   */
  amount?: number;
}

/**
 * Physical cart item model.
 */
export interface PhysicalCartItem extends CartItemBase {
  /**
   * Is shipping required for this item
   */
  is_require_shipping?: boolean;
  /**
   * Gift wrapping can be enabled for items.
   */
  gift_wrapping?: GiftWrapping;
}
