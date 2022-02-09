import { getCustomers } from '../../../src/api/customers';
import { contextMock } from '../../../__mocks__/context.mock';
import { GetCustomersResponse } from '../../../src';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import * as Login from '../../../src/api/customers/login';
import jwt from 'jsonwebtoken';

const jwtVerifyMock = jest.spyOn(jwt, 'verify');
const jwtDecodeMock = jest.spyOn(jwt, 'decode');
const performLoginMock = jest.spyOn(Login, 'performLogin');
const verifyLoginMock = jest.spyOn(Login, 'verifyLogin');
const setTokenCookieMock = jest.spyOn(Login, 'setTokenCookie');

describe('[bigcommerce-api-client] getCustomer', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('gets customer by sending the data stored in cookie', async () => {
    const token = 'token123';
    const customerId = 3;
    const decodedToken = { customer: { id: customerId } };
    jwtVerifyMock.mockImplementation(() => decodedToken);
    jwtDecodeMock.mockImplementation(() => decodedToken);
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

  it('throws error if the JWT token of customer data in cookie is invalid', async () => {
    const token = 'token123';
    const jwtError = 'invalid signature';
    jwtVerifyMock.mockImplementation(() => {
      throw new Error(jwtError);
    });
    contextMock.req = {
      cookies: {
        [COOKIE_KEY_CUSTOMER_DATA]: token
      }
    };
    const params = {};

    await expect(getCustomers(contextMock, params)).rejects
      .toMatchInlineSnapshot(`
            Object {
              "error": [Error: invalid signature],
              "statusCode": 401,
            }
          `);
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(0);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtDecodeMock).toHaveBeenCalledTimes(1);
  });

  it('refreshes the JWT token if it exists but has expired', async () => {
    const token = 'token123';
    const newToken = 'newtoken123';
    const customerId = '3';
    const decodedToken = { customer: { id: customerId } };
    jwtDecodeMock.mockImplementation(() => decodedToken);
    jwtVerifyMock.mockImplementation(() => {
      throw { name: 'TokenExpiredError' };
    });
    contextMock.req = {
      cookies: {
        [COOKIE_KEY_CUSTOMER_DATA]: token
      }
    };
    performLoginMock.mockImplementation(() => Promise.resolve());
    verifyLoginMock.mockImplementation(() => Promise.resolve(newToken));
    setTokenCookieMock.mockImplementation(() => Promise.resolve());
    const params = {};

    await getCustomers(contextMock, params);

    expect(performLoginMock).toHaveBeenCalledTimes(1);
    expect(performLoginMock).toHaveBeenCalledWith(contextMock, customerId);
    expect(verifyLoginMock).toHaveBeenCalledTimes(1);
    expect(verifyLoginMock).toHaveBeenCalledWith(contextMock);
    expect(setTokenCookieMock).toHaveBeenCalledTimes(1);
    expect(setTokenCookieMock).toHaveBeenCalledWith(contextMock, newToken);
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.customers}?id%3Ain=${customerId}`
    );
    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtDecodeMock).toHaveBeenCalledTimes(1);
  });

  it('returns undefined if there is no customer data token', async () => {
    contextMock.req = {
      cookies: {}
    };
    const params = {};
    contextMock.client.v3.get = jest.fn();
    jwtDecodeMock.mockImplementation(() => null);

    const response = await getCustomers(contextMock, params);

    expect(response).toBe(undefined);
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(0);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(0);
    expect(jwtDecodeMock).toHaveBeenCalledTimes(1);
  });
});
