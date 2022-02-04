import { contextMock } from '../../__mocks__';
import { loadUserOrderByCart } from '../../src/useUserOrderByCart/actions/load';
import { GetOrderByCartParameters } from '@vue-storefront/bigcommerce-api';

describe('[BigCommerce - composables] useUserOrderByCart load', () => {
  const getOrderByCartMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    contextMock.$bigcommerce.api.getOrderByCart = getOrderByCartMock;
  });

  it('should call api with required params', async () => {
    const expectedParams: GetOrderByCartParameters = {
      cartId: 'ff266040-7640-4f6c-a922-0b263a0168fb'
    };

    await loadUserOrderByCart(contextMock, expectedParams);

    expect(getOrderByCartMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error when order id is invalid', async () => {
    const loadParams: GetOrderByCartParameters = {
      cartId: undefined
    };

    try {
      await loadUserOrderByCart(contextMock, loadParams);
    } catch (error) {
      const exprectedErrorMsg = `CartId with value: ${loadParams.cartId} is not valid. Use string value.`;
      expect(error.message).toBe(exprectedErrorMsg);
    } finally {
      expect(getOrderByCartMock).toHaveBeenCalledTimes(0);
    }
  });
});
