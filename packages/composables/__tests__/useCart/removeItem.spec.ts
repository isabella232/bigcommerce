import { removeItem } from '../../src/useCart/actions';
import { mockedCart } from '../../__mocks__/cart.mock';
import { contextMock } from '../../__mocks__/context.mock';

describe('[BigCommerce - composables] useCart removeItem', () => {
  it('should add item to the cart', async () => {
    const removeCartItemsMock = jest.fn(() =>
      Promise.resolve({ data: mockedCart })
    );
    contextMock.$bigcommerce.api.removeCartItem = removeCartItemsMock;

    const cart = await removeItem(contextMock, {
      currentCart: mockedCart,
      product: mockedCart.line_items.physical_items[0]
    });

    expect(removeCartItemsMock).toHaveBeenCalledTimes(1);
    expect(cart).toEqual(mockedCart);
  });

  it('should create a new cart when the last item is removed from the previous one', async () => {
    const removeCartItemsMock = jest.fn(() =>
      Promise.resolve({ data: undefined })
    );
    const createCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));

    contextMock.$bigcommerce.api.removeCartItem = removeCartItemsMock;
    contextMock.$bigcommerce.api.createCart = createCartMock;

    contextMock.$bigcommerce.config.app.$cookies.remove = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.set = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.get = jest.fn(() => undefined);

    const cart = await removeItem(contextMock, {
      currentCart: mockedCart,
      product: mockedCart.line_items.physical_items[0]
    });

    expect(removeCartItemsMock).toHaveBeenCalledTimes(1);
    expect(cart).toEqual(mockedCart);

    expect(createCartMock).toBeCalledTimes(1);
  });
});
