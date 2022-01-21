import { contextMock } from '../../__mocks__';
import { loadUserOrderProducts } from '../../src/useUserOrderProducts/actions/load';
import { GetOrderProductsParameters } from '@vue-storefront/bigcommerce-api';

describe('[BigCommerce - composables] useUserOrderProducts load', () => {
  const getOrderProductsMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    contextMock.$bigcommerce.api.getOrderProducts = getOrderProductsMock;
  });

  it('should call api with required params', async () => {
    const expectedParams: GetOrderProductsParameters = {
      orderId: 40
    };

    await loadUserOrderProducts(contextMock, expectedParams);

    expect(getOrderProductsMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error when order id is invalid', async () => {
    const loadParams: GetOrderProductsParameters = {
      orderId: undefined
    };

    try {
      await loadUserOrderProducts(contextMock, loadParams);
    } catch (error) {
      const exprectedErrorMsg = `OrderId with value: ${loadParams.orderId} is not valid. Use number value.`;
      expect(error.message).toBe(exprectedErrorMsg);
    } finally {
      expect(getOrderProductsMock).toHaveBeenCalledTimes(0);
    }
  });
});
