import { getCustomerAddress } from '../../../src/api/address/get';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedAddress } from '../../../__mocks__/address.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { GetAddressParameters } from '../../../src/types';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import jwt from 'jsonwebtoken';

const jwtVerifyMock = jest.spyOn(jwt, 'verify');
const jwtDecodeMock = jest.spyOn(jwt, 'decode');

describe('[bigcommerce-api-client] get an address', () => {
  const params: GetAddressParameters = {
    'id:in': [1]
  };
  const expectedResponse = [mockedAddress];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get an address', async () => {
    const token = 'token123';
    const customerId = 3;
    const decodedToken = { customer: { id: customerId } };
    jwtVerifyMock.mockReturnValue(decodedToken);
    jwtDecodeMock.mockReturnValue(decodedToken);
    contextMock.req = {
      cookies: {
        [COOKIE_KEY_CUSTOMER_DATA]: token
      }
    };
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await getCustomerAddress(contextMock, params);
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(`${BigCommerceEndpoints.addresses}?customer_id%3Ain=3&id%3Ain=1`);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtVerifyMock).toHaveBeenCalledWith(token, contextMock.config.sdkSettings.devtoolsAppSecret);
    expect(response).toBe(expectedResponse);
  });
});
