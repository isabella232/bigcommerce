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
