import { deleteCustomerAddress } from '../../../src/api/address/delete';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { DeleteAddressParameters } from '../../../src/types';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import jwt from 'jsonwebtoken';

const jwtVerifyMock = jest.spyOn(jwt, 'verify');

describe('[bigcommerce-api-client] delete an address', () => {
  const addressId = 123;
  const params: DeleteAddressParameters = {
    'id:in': [addressId]
  };
  const token = 'token123';
  const customerId = 3;
  const decodedToken = { customer: { id: customerId } };
  jwtVerifyMock.mockReturnValue(decodedToken);
  contextMock.req = {
    cookies: {
      [COOKIE_KEY_CUSTOMER_DATA]: token
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete an address', async () => {
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve({ data: [{ id: addressId }] })
    );
    contextMock.client.v3.delete = jest.fn(() => Promise.resolve(null));
    const response = await deleteCustomerAddress(contextMock, params);
    expect(response).toBe(null);
    expect(jwtVerifyMock).toHaveBeenCalledTimes(1);
    expect(jwtVerifyMock).toHaveBeenCalledWith(
      token,
      contextMock.config.sdkSettings.devtoolsAppSecret
    );
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.addresses}?customer_id%3Ain=${customerId}`
    );
    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.delete).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.addresses}?id%3Ain=${addressId}`
    );
  });

  it("should throw an error if the address is not the customer's own address", async () => {
    contextMock.client.v3.get = jest.fn(() => Promise.resolve({ data: [] }));
    contextMock.client.v3.delete = jest.fn(() => Promise.resolve(null));

    await expect(
      deleteCustomerAddress(contextMock, params)
    ).rejects.toMatchInlineSnapshot(
      '[Error: You can delete your own address only.]'
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
    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(0);
  });
});
