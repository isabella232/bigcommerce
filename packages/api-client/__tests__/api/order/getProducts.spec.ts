import { stringifyUrl } from 'query-string';
import { getOrderProducts } from '../../../src/api/order';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { GetOrderProductsParameters } from '../../../src';

describe('[BigCommerce-api-client] get order products', () => {
  const orderId = 156;
  const getMock = jest.fn(() => Promise.resolve([]));

  contextMock.client.v2 = {
    get: getMock
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should request the orders of the current customer', async () => {
    await getOrderProducts(contextMock, { orderId });

    expect(getMock).toHaveBeenCalledWith(
      BigCommerceEndpoints.orderProducts(orderId)
    );
  });

  it('should send additional params to BigCommerce API', async () => {
    const params: Omit<GetOrderProductsParameters, 'orderId'> = {
      limit: 20,
      page: 2
    };

    await getOrderProducts(contextMock, { ...params, orderId });

    expect(getMock).toHaveBeenCalledWith(
      stringifyUrl({
        url: BigCommerceEndpoints.orderProducts(orderId),
        query: params
      })
    );
  });

  it('should throw an error when orderId was not provided', async () => {
    try {
      await getOrderProducts(contextMock, {} as any);
    } catch (error) {
      expect(error.message).toBe(
        'Order id with value: undefined is not valid. Use number value.'
      );
    } finally {
      expect(getMock).toHaveBeenCalledTimes(0);
    }
  });
});
