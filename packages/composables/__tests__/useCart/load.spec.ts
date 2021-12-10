import { CartIncludeEnum } from '@vue-storefront/bigcommerce-api';
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

  it('should update the cartId on the customer if customerId is provided as input', async () => {
    const customerId = 1;
    const updateCustomerFormFieldsMock = jest.fn(() => Promise.resolve([]));

    contextMock.$bigcommerce.api.updateCustomerFormFields = updateCustomerFormFieldsMock;
    contextMock.$bigcommerce.config.app.$cookies.get = jest
      .fn()
      .mockReturnValue(undefined);

    await load(contextMock, { customQuery: { customerId } });

    expect(createCartMock).toHaveBeenCalledTimes(1);
    expect(createCartMock).toHaveBeenCalledWith({
      data: { customer_id: customerId, line_items: [] },
      include: CartIncludeEnum.RedirectUrls
    });
    expect(updateCustomerFormFieldsMock).toHaveBeenCalledTimes(1);
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
