import { contextMock } from '../../__mocks__';
import { logOut } from '../../src/useUser/actions';
import { load as loadCart } from '../../src/useCart/actions';
import {
  COOKIE_KEY_CUSTOMER_DATA,
  COOKIE_KEY_SHOP_SESSION_TOKEN,
  COOKIE_KEY_SHOPPER_PREF
} from '@vue-storefront/bigcommerce-api';

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
    const cookiesToDelete = [
      COOKIE_KEY_CUSTOMER_DATA,
      COOKIE_KEY_SHOP_SESSION_TOKEN,
      COOKIE_KEY_SHOPPER_PREF
    ];

    const cookieRemover = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.remove = cookieRemover;
    contextMock.cart.setCart = jest.fn();
    const expectedNewCart = {};
    (loadCart as jest.Mock).mockReturnValue(expectedNewCart);

    await logOut(contextMock);

    cookiesToDelete.forEach((cookieToDelete) => {
      expect(cookieRemover).toBeCalledWith(cookieToDelete);
    });
    expect(cookieRemover).toBeCalledTimes(cookiesToDelete.length);
    expect(loadCart).toBeCalledTimes(1);
    expect(loadCart).toBeCalledWith(contextMock, {});
    expect(contextMock.cart.setCart).toBeCalledTimes(1);
    expect(contextMock.cart.setCart).toBeCalledWith(expectedNewCart);
  });
});
