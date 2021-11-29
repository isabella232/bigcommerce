import { COOKIE_KEY_CUSTOMER_DATA } from '../../../api-client/src/helpers/consts';
const jwt = require('jsonwebtoken');
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
    const customerData = {
      customer: {
        email: 'janedoe@example.com',
        id: 1
      }
    };
    const customerToken = 'asdf123456789';
    contextMock.$bigcommerce.api.loginCustomer = jest.fn();
    contextMock.$bigcommerce.config.app.$cookies.get = jest
      .fn()
      .mockReturnValue(customerToken);

    jwt.decode.mockReturnValue(customerData);

    const response = await logIn(contextMock, loginCredentials);

    expect(contextMock.$bigcommerce.api.loginCustomer).toBeCalledTimes(1);
    expect(contextMock.$bigcommerce.api.loginCustomer).toBeCalledWith({
      email: loginCredentials.username,
      password: loginCredentials.password
    });
    expect(contextMock.$bigcommerce.config.app.$cookies.get).toBeCalledTimes(1);
    expect(contextMock.$bigcommerce.config.app.$cookies.get).toBeCalledWith(
      COOKIE_KEY_CUSTOMER_DATA
    );
    expect(jwt.decode).toBeCalledTimes(1);
    expect(jwt.decode).toBeCalledWith(customerToken);
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
