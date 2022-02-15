import { updateCustomerAddress } from '../../../src/api/address/update';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedAddress } from '../../../__mocks__/address.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import {
  COOKIE_KEY_CUSTOMER_DATA,
  UpdateAddressParameters
} from '../../../src';
import jwt from 'jsonwebtoken';

describe('[bigcommerce-api-client] update address', () => {
  const jwtVerifyMock = jest.spyOn(jwt, 'verify');
  const jwtDecodeMock = jest.spyOn(jwt, 'decode');

  const addressId = 123;
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update an address', async () => {
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve({ data: [{ id: addressId }] })
    );
    const address: UpdateAddressParameters = {
      ...mockedAddress,
      id: addressId,
      customer_id: customerId
    };
    const expectedResponse = [address];
    contextMock.client.v3.put = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await updateCustomerAddress(contextMock, address);

    expect(response).toBe(expectedResponse);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(2);
    expect(jwtVerifyMock).toHaveBeenCalledWith(
      token,
      contextMock.config.sdkSettings.devtoolsAppSecret
    );
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.addresses}?customer_id%3Ain=${customerId}`
    );
    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.put).toHaveBeenCalledWith(`${BigCommerceEndpoints.addresses}`, [address]);
  });

  it('should throw an error if the address is not the customer\'s own address', async () => {
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve({ data: [] })
    );
    const address: UpdateAddressParameters = {
      ...mockedAddress,
      id: addressId,
      customer_id: customerId
    };
    const expectedResponse = [address];
    contextMock.client.v3.put = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    await expect(
      updateCustomerAddress(contextMock, address)
    ).rejects.toMatchInlineSnapshot(
      '[Error: You can edit your own address only.]'
    );

    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtVerifyMock).toHaveBeenCalledWith(
      token,
      contextMock.config.sdkSettings.devtoolsAppSecret
    );
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.addresses}?customer_id%3Ain=${customerId}`
    );
    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(0);
  });

  it('should throw an error if address lines are above 255 characters', async () => {
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve({ data: [{ id: addressId }] })
    );
    mockedAddress.address2 = 'a'.repeat(256);
    const address: UpdateAddressParameters = {
      ...mockedAddress,
      id: addressId,
      customer_id: customerId
    };

    await expect(
      updateCustomerAddress(
        contextMock,
        address)
    ).rejects.toMatchInlineSnapshot('[Error: Address line 1 and line 2 must be 255 characters or less.]');
  });
});
