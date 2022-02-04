import { getOrderByCart } from '../../../src/api/order/getByCart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { stringifyUrl } from 'query-string';

describe('[BigCommerce-api-client] get order by cartId', () => {
  const cartId = 'ff266040-7640-4f6c-a922-0b263a0168fb';
  const orderId = 3;

  it('should request the order data using the given cartId', async () => {
    const getMock = jest.fn(() => Promise.resolve([{ id: orderId }]));

    contextMock.client.v2 = {
      get: getMock
    };

    await getOrderByCart(contextMock, { cartId });

    expect(getMock).toHaveBeenCalledTimes(3);

    expect(getMock.mock.calls).toEqual([
      [
        stringifyUrl({
          url: BigCommerceEndpoints.orders,
          query: { cart_id: cartId }
        })
      ],
      [BigCommerceEndpoints.orderProducts(orderId)],
      [BigCommerceEndpoints.orderShipping(orderId)]
    ]);
  });

  it('should throw error if the order is not found ', async () => {
    const getMock = jest.fn(() => Promise.resolve([]));

    contextMock.client.v2 = {
      get: getMock
    };

    try {
      await getOrderByCart(contextMock, { cartId });
    } catch (error) {
      expect(error.message).toEqual('No order found');
    }
  });
});
