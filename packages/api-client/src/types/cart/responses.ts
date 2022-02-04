import { Cart } from '.';

/**
 * Add line item response.
 */
export interface AddLineItemsResponse {
  /**
   * Cart information.
   */
  data: Cart;
  /**
   * Empty object.
   */
  meta: Record<string, never>;
}

/**
 * Response of create cart request.
 */
export type CreateCartResponse = AddLineItemsResponse;

/**
 * Response of get cart request.
 */
export type GetCartResponse = AddLineItemsResponse;

/**
 * Response of update cart request.
 */
export type UpdateCartResponse = AddLineItemsResponse;

/**
 * Response of remove an item from the cart request.
 */
export type RemoveLineItemResponse = AddLineItemsResponse;

/**
 * Response of update a cart item request.
 */
export type UpdateLineItemResponse = AddLineItemsResponse;

/**
 * Type alias for generic response of multiple cart related requests.
 */
export type CartResponse =
  | CreateCartResponse
  | GetCartResponse
  | UpdateLineItemResponse
  | AddLineItemsResponse;
