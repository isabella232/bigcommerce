import { load } from '../../src/useCart/actions';
import { mockedCart } from '../../__mocks__/cart.mock';
import { contextMock } from '../../__mocks__/context.mock';

describe('[BigCommerce - composables] useCart load', () => {
  const createCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));
  const getCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));

  beforeEach(() => {
    jest.clearAllMocks();

    contextMock.$bigcommerce.api.createCart = createCartMock;
    contextMock.$bigcommerce.api.getCart = getCartMock;
    contextMock.$bigcommerce.config.app.$cookies.set = jest.fn();
  });

  it('should create a new cart if no cart_id cookie found', async () => {
    contextMock.$bigcommerce.config.app.$cookies.get = jest
      .fn()
      .mockReturnValue(undefined);

    await load(contextMock, {});

    expect(createCartMock).toHaveBeenCalledTimes(1);
    expect(getCartMock).toHaveBeenCalledTimes(0);
  });

  it('should call getCart API when cart_id found', async () => {
    contextMock.$bigcommerce.config.app.$cookies.get = jest
      .fn()
      .mockReturnValue(mockedCart.id);

    const cart = await load(contextMock, {});

    expect(createCartMock).toHaveBeenCalledTimes(0);
    expect(getCartMock).toHaveBeenCalledTimes(1);

    expect(cart).toEqual(mockedCart);
  });
});
