import { validateCredentials } from '../../../src/api/customers';
import { ValidateCredentialsParameter } from '../../../src/types';

import { contextMock } from '../../../__mocks__/context.mock';

describe('[bigcommerce-api-client] validateCredentials', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('validates the credentials of a customer', async () => {
    const parameters = {
      email: 'janedoe@example.com',
      password: 'string'
    };
    const expectedResponse = {
      is_valid: true
    };
    contextMock.client.post = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await validateCredentials(contextMock, parameters);

    expect(contextMock.client.post).toHaveBeenCalledTimes(1);
    expect(contextMock.client.post).toHaveBeenCalledWith(
      '/customers/validate-credentials',
      parameters
    );
    expect(response).toMatchInlineSnapshot(`
      Object {
        "is_valid": true,
      }
    `);
  });

  it('throws an error if there is a error response from the API', async () => {
    const parameters = {
      email: 'janedoe@example.com',
      password: 'string'
    };
    const expectedError = 'API error';
    contextMock.client.post = jest.fn(() => Promise.reject(expectedError));

    await expect(
      validateCredentials(contextMock, parameters)
    ).rejects.toMatchInlineSnapshot('"API error"');
    expect(contextMock.client.post).toHaveBeenCalledTimes(1);
    expect(contextMock.client.post).toHaveBeenCalledWith(
      '/customers/validate-credentials',
      parameters
    );
  });

  it('throws an error if parameters are missing', async () => {
    const parameters = {
      email: 'janedoe@example.com'
    };
    await expect(
      validateCredentials(
        contextMock,
        (parameters as unknown) as ValidateCredentialsParameter
      )
    ).rejects.toMatchInlineSnapshot('[Error: Required parameters missing.]');
    expect(contextMock.client.post).not.toHaveBeenCalled();
  });
});
