import { createCustomerAddress } from '../../../src/api/address/create';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedAddress } from '../../../__mocks__/address.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CreateAddressParameters } from '../../..';
import jwt from 'jsonwebtoken';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';

const jwtVerifyMock = jest.spyOn(jwt, 'verify');
const jwtDecodeMock = jest.spyOn(jwt, 'decode');

describe('[bigcommerce-api-client] create address', () => {
  const customerId = 3;
  const newAddress = { ...mockedAddress, customer_id: customerId };
  delete newAddress.id;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create an address', async () => {
    const token = 'token123';
    const decodedToken = { customer: { id: customerId } };
    jwtVerifyMock.mockReturnValue(decodedToken);
    jwtDecodeMock.mockReturnValue(decodedToken);
    contextMock.req = {
      cookies: {
        [COOKIE_KEY_CUSTOMER_DATA]: token
      }
    };
    const expectedResponse = [mockedAddress];
    contextMock.client.v3.post = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await createCustomerAddress(contextMock, newAddress);
    expect(response).toBe(expectedResponse);
    expect(contextMock.client.v3.post).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.post).toHaveBeenCalledWith(BigCommerceEndpoints.addresses, [newAddress]);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtVerifyMock).toHaveBeenCalledWith(
      token,
      contextMock.config.sdkSettings.devtoolsAppSecret
    );
  });

  it('should not create an address missing required field', async () => {
    const newAddressMissingCustomerId = Object.assign({}, newAddress, {
      customer_id: undefined
    });

    const expectedError = '[Error: Required parameters missing.]';
    contextMock.client.v3.post = jest.fn(() => Promise.reject(expectedError));

    await expect(
      createCustomerAddress(
        contextMock,
        (newAddressMissingCustomerId as unknown) as CreateAddressParameters
      )
    ).rejects.toMatchInlineSnapshot('"[Error: Required parameters missing.]"');
  });
});
