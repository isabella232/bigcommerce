import { getCustomers } from '../../../src/api/customers';
import { contextMock } from '../../../__mocks__/context.mock';
import { GetCustomersResponse } from '../../../src';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import jwt from 'jsonwebtoken';

const jwtVerifyMock = jest.spyOn(jwt, 'verify');

describe('[bigcommerce-api-client] getCustomer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets customer by sending the data stored in cookie', async () => {
    const token = 'token123';
    const customerId = 3;
    const decodedToken = { customer: { id: customerId } };
    jwtVerifyMock.mockReturnValue(decodedToken);
    contextMock.req = {
      cookies: {
        [COOKIE_KEY_CUSTOMER_DATA]: token
      }
    };
    const params = {};
    const expectedResponse: GetCustomersResponse = {
      data: [
        {
          id: customerId,
          email: 'john@lenon.com',
          first_name: 'john',
          last_name: 'lenon'
        }
      ],
      meta: {
        pagination: {
          total: 1,
          count: 1,
          per_page: 50,
          current_page: 1,
          total_pages: 1
        }
      }
    };
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response: GetCustomersResponse = await getCustomers(
      contextMock,
      params
    );

    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      `/customers?id%3Ain=${customerId}`
    );
    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtVerifyMock).toHaveBeenCalledWith(
      token,
      contextMock.config.sdkSettings.devtoolsAppSecret
    );
    expect(response).toBe(expectedResponse);
    expect(response.data[0].id).toBe(customerId);
  });

  it('should throw an error if customer data cookie is not sent', async () => {
    const customerId = 3;
    contextMock.req = {
      cookies: {}
    };
    const params = {
      'id:in': [customerId]
    };
    const expectedResponse: GetCustomersResponse = {
      data: [
        {
          id: customerId,
          email: 'john@lenon.com',
          first_name: 'john',
          last_name: 'lenon'
        }
      ],
      meta: {
        pagination: {
          total: 1,
          count: 1,
          per_page: 50,
          current_page: 1,
          total_pages: 1
        }
      }
    };
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    await expect(
      getCustomers(contextMock, params)
    ).rejects.toMatchInlineSnapshot(
      `
            Object {
              "error": "No customer ID",
              "statusCode": 404,
            }
          `
    );

    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(0);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(0);
  });

  it('throws error if the JWT token of customer data in cookie is invalid', async () => {
    const token = 'token123';
    const jwtError = 'Malformed JWT token';
    jwtVerifyMock.mockImplementation(() => {
      throw new Error(jwtError);
    });
    contextMock.req = {
      cookies: {
        [COOKIE_KEY_CUSTOMER_DATA]: token
      }
    };
    const params = {};

    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(0);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(0);
    await expect(
      getCustomers(contextMock, params)
    ).rejects.toMatchInlineSnapshot(
      `
            Object {
              "error": [Error: Malformed JWT token],
              "statusCode": 401,
            }
          `
    );
  });

  it('throws error if there is not customer data token or ID provided in parameter', async () => {
    contextMock.req = {
      cookies: {}
    };
    const params = {};
    contextMock.client.v3.get = jest.fn();

    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(0);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(0);
    await expect(
      getCustomers(contextMock, params)
    ).rejects.toMatchInlineSnapshot(
      `
            Object {
              "error": "No customer ID",
              "statusCode": 404,
            }
          `
    );
  });
});
