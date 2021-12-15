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
      password: 'string',
      channel_id: 1
    };
    const loginResponse = {
      customer_id: 1,
      is_valid: true
    };

    const customerResponse = {
      id: 1,
      email: 'janedoe@example.com'
    };

    contextMock.$bigcommerce.api.loginCustomer = jest
      .fn()
      .mockReturnValue(loginResponse);

    contextMock.$bigcommerce.api.getCustomer = jest
      .fn()
      .mockReturnValue(customerResponse);

    logIn(contextMock, loginCredentials);
  });

  it('calls loginCustomer API method with incorrect credentials and throws an error ', async () => {
    const invalidLoginCredentials = {
      username: 'userdont@exist.com',
      password: 'abcdef',
      channel_id: 1
    };

    const loginMock = jest.fn().mockReturnValue(() => {
      throw new Error('invalid credentials');
    });

    contextMock.$bigcommerce.api.loginCustomer = loginMock;
    contextMock.$bigcommerce.api.getCustomer = jest.fn().mockReturnValue(null);

    await logIn(contextMock, invalidLoginCredentials).catch(() => {});

    expect(loginMock).toHaveBeenCalledTimes(1);
    expect(loginMock()).toThrowError();
  });
});
