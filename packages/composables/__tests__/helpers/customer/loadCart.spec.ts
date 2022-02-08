import { loadCustomerCart } from '../../../src/helpers/customer';
import { mockedCart } from '../../../__mocks__/cart.mock';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedUser } from '../../../__mocks__/user.mock';

describe('[BigCommerce - composables] loadCustomerCart helper', () => {
  const getCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));
  const addCartItemsMock = jest.fn(() => Promise.resolve({ data: mockedCart }));
  const setCartMock = jest.fn();

  beforeAll(() => {
    contextMock.$bigcommerce.config.app.$cookies.remove = jest.fn();
    contextMock.$bigcommerce.api.getCart = getCartMock;
    contextMock.$bigcommerce.api.addCartItems = addCartItemsMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call assignCart when user has no previous cart', async () => {
    (contextMock as any).cart = {
      cart: {
        value: mockedCart
      },
      setCart: setCartMock
    };

    const mockedUserWithoutCart = { ...mockedUser, form_fields: [] };

    const updateCustomerFormFieldsMock = jest.fn(() =>
      Promise.resolve({ data: mockedUser.form_fields })
    );
    const updateCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));

    contextMock.$bigcommerce.api.updateCustomerFormFields =
      updateCustomerFormFieldsMock;
    contextMock.$bigcommerce.api.updateCart = updateCartMock;

    await loadCustomerCart(contextMock, mockedUserWithoutCart);

    expect(updateCustomerFormFieldsMock).toHaveBeenCalledTimes(1);
    expect(updateCartMock).toHaveBeenCalledTimes(1);
  });

  it('should merge carts when the user has previous carts', async () => {
    (contextMock as any).cart = {
      cart: {
        value: mockedCart
      },
      setCart: setCartMock
    };

    await loadCustomerCart(contextMock, mockedUser);

    expect(getCartMock).toHaveBeenCalledTimes(1);
    expect(addCartItemsMock).toHaveBeenCalledTimes(1);
    expect(setCartMock).toHaveBeenCalledTimes(1);
  });

  it('should not merge carts when the guest cart is empty', async () => {
    (contextMock as any).cart = {
      cart: {
        value: {
          ...mockedCart,
          line_items: {
            physical_items: [],
            digital_items: [],
            gift_certificates: [],
            custom_items: []
          }
        }
      },
      setCart: setCartMock
    };

    await loadCustomerCart(contextMock, mockedUser);

    expect(getCartMock).toHaveBeenCalledTimes(1);
    expect(addCartItemsMock).toHaveBeenCalledTimes(0);
    expect(setCartMock).toHaveBeenCalledTimes(1);
  });
});
