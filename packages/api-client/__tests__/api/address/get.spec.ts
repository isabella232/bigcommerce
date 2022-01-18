import { getCustomerAddress } from '../../../src/api/address/get';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedAddress } from '../../../__mocks__/address.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { GetAddressParameters } from '../../../src/types';

describe('[bigcommerce-api-client] get an address', () => {
  const params: GetAddressParameters = {
    'id:in': [1]
  };

  const expectedResponse = [mockedAddress];

  contextMock.client.v3.get = (url: string) => {
    expect(url).toEqual(`${BigCommerceEndpoints.addresses}?id%3Ain=1`);
    return expectedResponse;
  };

  it('should get an address', async () => {
    const response = await getCustomerAddress(contextMock, params);
    expect(response).toBe(expectedResponse);
  });
});
