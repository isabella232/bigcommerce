import { updateCustomerAddress } from '../../../src/api/address/update';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedAddress } from '../../../__mocks__/address.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { UpdateAddressParameters } from '../../../src';

describe('[bigcommerce-api-client] update address', () => {
  const address: UpdateAddressParameters = {
    ...mockedAddress
  };

  const expectedResponse = [mockedAddress];

  contextMock.client.put = (url: string, params: UpdateAddressParameters) => {
    expect(url).toEqual(BigCommerceEndpoints.addresses);

    expect([address]).toEqual(params);

    return expectedResponse;
  };

  it('should update an address', async () => {
    const response = await updateCustomerAddress(contextMock, address);
    expect(response).toBe(expectedResponse);
  });

  it('should not update an address missing required field', async () => {
    const addressMissingCustomerId = {
      address1: '123 5th ave'
    };

    const expectedError = '[Error: Required parameters missing.]';
    contextMock.client.put = jest.fn(() => Promise.reject(expectedError));

    await expect(
      updateCustomerAddress(
        contextMock,
        (addressMissingCustomerId as unknown) as UpdateAddressParameters
      )
    ).rejects.toMatchInlineSnapshot('"[Error: Required parameters missing.]"');
  });
});
