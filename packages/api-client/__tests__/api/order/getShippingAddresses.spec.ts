import { stringifyUrl } from 'query-string';
import { getOrderShippingAddresses } from '../../../src/api/order/getShippingAddresses';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { GetOrderShippingAddressesParameters } from '../../../src';

describe('[BigCommerce-api-client] get order shipping addresses', () => {
  const orderId = 48;
  const getMock = jest.fn(() => Promise.resolve([]));

  contextMock.client.v2 = {
    get: getMock
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should request the shipping data of the current order', async () => {
    await getOrderShippingAddresses(contextMock, { orderId });

    expect(getMock).toHaveBeenCalledWith(
      BigCommerceEndpoints.orderShipping(orderId)
    );
  });

  it('should send additional params to BigCommerce API', async () => {
    const params: Omit<GetOrderShippingAddressesParameters, 'orderId'> = {
      limit: 10,
      page: 1
    };

    await getOrderShippingAddresses(contextMock, { ...params, orderId });

    expect(getMock).toHaveBeenCalledWith(
      stringifyUrl({
        url: BigCommerceEndpoints.orderShipping(orderId),
        query: params
      })
    );
  });

  it('should throw an error when orderId was not provided', async () => {
    try {
      await getOrderShippingAddresses(contextMock, {} as any);
    } catch (error) {
      expect(error.message).toBe(
        'Order id with value: undefined is not valid. Use number value.'
      );
    } finally {
      expect(getMock).toHaveBeenCalledTimes(0);
    }
  });
});
