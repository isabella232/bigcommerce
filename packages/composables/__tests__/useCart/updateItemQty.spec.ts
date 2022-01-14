import { updateItemQty } from '../../src/useCart/actions';
import { mockedCart } from '../../__mocks__/cart.mock';
import { contextMock } from '../../__mocks__/context.mock';

describe('[BigCommerce - composables] useCart updateItemQty', () => {
  it('should update the quantity of a cart item', async () => {
    const updateItemQtyMock = jest.fn(() =>
      Promise.resolve({ data: mockedCart })
    );
    contextMock.$bigcommerce.api.updateCartItem = updateItemQtyMock;

    const cart = await updateItemQty(contextMock, {
      currentCart: mockedCart,
      product: mockedCart.line_items.physical_items[0],
      quantity: 3
    });

    expect(updateItemQtyMock).toHaveBeenCalledTimes(1);
    expect(cart).toEqual(mockedCart);
  });
});
