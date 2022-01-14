import { deleteCustomerAddress } from '../../../src/api/address/delete';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { DeleteAddressParameters } from '../../../src/types';

describe('[bigcommerce-api-client] get an address', () => {
  const params: DeleteAddressParameters = {
    'id:in': [123]
  };

  contextMock.client.delete = (url: string) => {
    expect(url).toEqual(`${BigCommerceEndpoints.addresses}?id%3Ain=123`);
    return null;
  };

  it('should delete an address', async () => {
    const response = await deleteCustomerAddress(contextMock, params);
    expect(response).toBe(null);
  });
});
