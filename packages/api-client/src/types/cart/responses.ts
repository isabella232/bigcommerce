import { Cart } from '.';

/**
 * Definition of the response to the add line items to cart request.
 */
export type AddLineItemsResponse = {
  data: Cart;
};

/**
 * Definition of the response to the create cart request.
 */
export type CreateCartResponse = AddLineItemsResponse;
