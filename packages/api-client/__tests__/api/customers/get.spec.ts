import { getCustomers } from '../../../src/api/customers';
import { contextMock } from '../../../__mocks__/context.mock';
import { GetCustomersParameters, GetCustomersResponse } from '../../../src';

describe('[bigcommerce-api-client] getCustomer', () => {
  it('gets customer by id', async () => {

    const params: GetCustomersParameters = {
      'id:in': [11]
    };

    const expectedResponse: GetCustomersResponse = {
      data: [
        {
          id: 11,
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

    contextMock.client.get = jest.fn(() => Promise.resolve(expectedResponse));

    const response: GetCustomersResponse = await getCustomers(
      contextMock,
      params
    );

    expect(contextMock.client.get).toHaveBeenCalledTimes(1);
    expect(response).toBe(expectedResponse);
    expect(response.data[0].id).toBe(11);
  });
});
