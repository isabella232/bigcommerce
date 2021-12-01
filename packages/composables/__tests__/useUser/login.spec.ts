import { contextMock } from '../../__mocks__';
import { logIn } from '../../src/useUser/actions';

jest.mock('jsonwebtoken');

describe('[bigcommerce-composables] useUser logIn', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('calls loginCustomer API method and returns the data from it', async () => {
    const loginCredentials = {
      username: 'janedoe@example.com',
      password: 'string'
    };
    const loginResponse = {
      customer_id: 1,
      is_valid: true
    };
    contextMock.$bigcommerce.api.loginCustomer = jest
      .fn()
      .mockReturnValue(loginResponse);

    const response = await logIn(contextMock, loginCredentials);

    expect(response).toMatchInlineSnapshot(`
      Object {
        "user": Object {
          "email": "janedoe@example.com",
          "id": 1,
        },
      }
    `);
  });
});
