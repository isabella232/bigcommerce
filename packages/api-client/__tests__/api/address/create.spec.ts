import { createCustomerAddress } from '../../../src/api/address/create';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedAddress } from '../../../__mocks__/address.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CreateAddressParameters } from '../../..';

describe('[bigcommerce-api-client] create address', () => {
  const newAddress: CreateAddressParameters = Object.assign({}, mockedAddress, {
    id: undefined
  });

  const expectedResponse = [mockedAddress];

  contextMock.client.v3.post = (url: string, params: CreateAddressParameters) => {
    expect(url).toEqual(BigCommerceEndpoints.addresses);

    expect([newAddress]).toEqual(params);

    return expectedResponse;
  };

  it('should create an address', async () => {
    const response = await createCustomerAddress(contextMock, newAddress);
    expect(response).toBe(expectedResponse);
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
