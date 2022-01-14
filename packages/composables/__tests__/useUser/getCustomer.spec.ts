import { contextMock } from '../../__mocks__';
import { getCustomer } from '../../src/useUser/actions';

describe('[bigcommerce-composables] useUser getCustomer', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('calls getCustomer API method and returns the data from it', async () => {
    contextMock.$bigcommerce.api.getCustomers = jest.fn().mockReturnValue({
      data: [
        {
          email: 'janedoe@example.com',
          id: 1
        }
      ],
      meta: {}
    });

    const params = { 'id:in': [11] };
    const response = await getCustomer(contextMock, params);

    expect(response).toMatchInlineSnapshot(`
      Object {
        "email": "janedoe@example.com",
        "id": 1,
      }
    `);
  });
});
