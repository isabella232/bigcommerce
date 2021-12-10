import { clear } from '../../src/useCart/actions';
import { mockedCart } from '../../__mocks__/cart.mock';
import { contextMock } from '../../__mocks__/context.mock';

describe('[BigCommerce - composables] useCart clear', () => {
  it('should delete the cart and create a new one', async () => {
    const deleteCartMock = jest.fn(() => Promise.resolve(''));
    const createCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));

    contextMock.$bigcommerce.api.deleteCart = deleteCartMock;
    contextMock.$bigcommerce.api.createCart = createCartMock;

    contextMock.$bigcommerce.config.app.$cookies.remove = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.set = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.get = jest.fn(() => undefined);

    const cart = await clear(contextMock, {
      currentCart: mockedCart
    });

    expect(deleteCartMock).toHaveBeenCalledTimes(1);
    expect(cart).toEqual(mockedCart);

    expect(contextMock.$bigcommerce.config.app.$cookies.set).toBeCalledTimes(2);
    expect(createCartMock).toBeCalledTimes(1);
  });
});
