import { contextMock } from '../../__mocks__';
import { logOut } from '../../src/useUser/actions';
import { load as loadCart } from '../../src/useCart/actions';

jest.mock(
  '../../src/useCart/actions',
  () =>
    ({
      load: jest.fn()
    } as any)
);

describe('[bigcommerce-composables] useUser logOut', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('deletes customer data and creates a new cart', async () => {
    contextMock.cart.setCart = jest.fn();

    const expectedNewCart = {};
    (loadCart as jest.Mock).mockReturnValue(expectedNewCart);
    contextMock.$bigcommerce.api.logoutCustomer = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.remove = jest.fn();
    await logOut(contextMock);

    expect(contextMock.$bigcommerce.api.logoutCustomer).toBeCalledTimes(1);
    expect(contextMock.$bigcommerce.api.logoutCustomer).toBeCalledWith();
    expect(loadCart).toBeCalledTimes(1);
    expect(loadCart).toBeCalledWith(contextMock, {});
    expect(contextMock.cart.setCart).toBeCalledTimes(1);
    expect(contextMock.cart.setCart).toBeCalledWith(expectedNewCart);
  });
});
