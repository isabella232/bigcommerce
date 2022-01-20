import { stringifyUrl } from 'query-string';
import { getOrders } from '../../../src/api/order';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { COOKIE_KEY_CUSTOMER_DATA, GetOrdersParameters } from '../../../src';
import jwt from 'jsonwebtoken';

const jwtVerifyMock = jest.spyOn(jwt, 'verify');

describe('[BigCommerce-api-client] get orders', () => {
  const getMock = jest.fn(() => Promise.resolve([]));

  const customerId = 10;
  const decodedToken = { customer: { id: customerId } };
  jwtVerifyMock.mockReturnValue(decodedToken);

  contextMock.client.v2 = {
    get: getMock
  };

  contextMock.req = {
    cookies: {
      [COOKIE_KEY_CUSTOMER_DATA]: 'token123'
    }
  };

  it('should request the orders of the current customer', async () => {
    await getOrders(contextMock);

    expect(getMock).toHaveBeenCalledWith(
      stringifyUrl({
        url: BigCommerceEndpoints.orders,
        query: { customer_id: customerId }
      })
    );
  });

  it('should send additional params to BigCommerce API', async () => {
    const params: GetOrdersParameters = {
      min_total: 100,
      is_deleted: false
    };

    await getOrders(contextMock, params);

    expect(getMock).toHaveBeenCalledWith(
      stringifyUrl({
        url: BigCommerceEndpoints.orders,
        query: { ...params, customer_id: customerId }
      })
    );
  });
});
