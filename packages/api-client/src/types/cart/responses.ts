import { Cart } from '.';

/**
 * Definition of the response to the add line items to cart request.
 */
export type AddLineItemsResponse = {
  data: Cart;
  meta: Record<string, never>;
};

/**
 * Definition of the response to the create cart request.
 */
export type CreateCartResponse = AddLineItemsResponse;

/**
 * Definition of the response to the get cart request.
 */
export type GetCartResponse = AddLineItemsResponse;

/**
 * Definition of the response to remove an item from the cart request.
 */
export type RemoveLineItemResponse = AddLineItemsResponse;

/**
 * Definition of the response to update a cart item request.
 */
export type UpdateLineItemResponse = AddLineItemsResponse;
