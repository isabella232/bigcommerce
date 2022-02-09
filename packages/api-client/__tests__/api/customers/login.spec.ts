import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockModulePartially } from '../../helpers/test';

describe('[bigcommerce-api-client] loginCustomer', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('logs in the customer and sets the cookie', async () => {
    const expectedDataToken = '...';
    const loginCredentials = {
      email: 'example@email.com',
      password: 'secretpass'
    };
    const customerId = 2;
    const getValidationResponse = jest
      .fn()
      .mockResolvedValue({ customer_id: customerId });
    const performLogin = jest.fn();
    const verifyLogin = jest.fn().mockImplementation(() => expectedDataToken);
    const setTokenCookie = jest.fn();
    mockModulePartially('../../../src/api/customers/login', () => ({
      getValidationResponse,
      performLogin,
      verifyLogin,
      setTokenCookie
    }));
    const module = await import('../../../src/api/customers/login');

    await module.loginCustomer(contextMock, loginCredentials);

    expect(getValidationResponse).toBeCalledTimes(1);
    expect(getValidationResponse).toBeCalledWith(
      contextMock,
      loginCredentials
    );
    expect(performLogin).toBeCalledTimes(1);
    expect(performLogin).toBeCalledWith(contextMock, customerId);
    expect(verifyLogin).toBeCalledTimes(1);
    expect(verifyLogin).toBeCalledWith(contextMock);
    expect(setTokenCookie).toBeCalledTimes(1);
    expect(setTokenCookie).toBeCalledWith(contextMock, expectedDataToken);
  });

  it('calls generated SSO login link', async () => {
    const customerId = 2;
    const generatedLoginLink = 'https://login.link';
    const setCookieHeaderFromLogin = 'cookie-string1, cookie-string2';
    const fetch = jest.fn().mockResolvedValue({
      status: 200,
      url: '/account.php',
      headers: {
        get: (headerName) => {
          expect(headerName).toEqual('set-cookie');
          return setCookieHeaderFromLogin;
        }
      }
    });
    jest.doMock('fetch-cookie/node-fetch', () => () => fetch);
    const cookie = jest.fn();
    contextMock.res = {
      cookie
    };
    const generateSsoLoginLink = jest.fn().mockReturnValue(generatedLoginLink);
    mockModulePartially('../../../src/api/customers/login', () => ({
      generateSsoLoginLink
    }));
    const module = await import('../../../src/api/customers/login');

    await module.performLogin(contextMock, customerId);

    expect(generateSsoLoginLink).toBeCalledTimes(1);
    expect(generateSsoLoginLink).toBeCalledWith(contextMock, customerId);
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(generatedLoginLink);
  });

  it('throws an error if login credentials are invalid', async () => {
    const validateCredentialsMock = jest.fn().mockResolvedValue({
      is_valid: false
    });
    contextMock.client.v3.post = validateCredentialsMock;
    const invalidCredentials = {
      email: 'invalid',
      password: 'invalid'
    };
    const module = await import('../../../src/api/customers/login');

    await expect(
      module.getValidationResponse(contextMock, invalidCredentials)
    ).rejects.toMatchInlineSnapshot(`
            Object {
              "error": Object {
                "message": "Wrong email or password",
              },
              "statusCode": 400,
            }
          `);

    expect(validateCredentialsMock).toHaveBeenCalledTimes(1);
    expect(validateCredentialsMock).toHaveBeenCalledWith(
      BigCommerceEndpoints.validateCredentials,
      invalidCredentials
    );
  });

  it('validates credentials', async () => {
    const customerId = 2;
    const validationResult = {
      is_valid: true,
      customer_id: customerId
    };
    const validateCredentialsMock = jest.fn().mockResolvedValue(validationResult);
    contextMock.client.v3.post = validateCredentialsMock;
    const loginCredentials = {
      email: 'example@email.com',
      password: 'super-secret'
    };
    const module = await import('../../../src/api/customers/login');

    const result = await module.getValidationResponse(
      contextMock,
      loginCredentials
    );

    expect(result).toEqual(validationResult);
    expect(validateCredentialsMock).toHaveBeenCalledTimes(1);
    expect(validateCredentialsMock).toHaveBeenCalledWith(
      BigCommerceEndpoints.validateCredentials,
      loginCredentials
    );
  });

  it('throws an error if Customer Login API response is invalid', async () => {
    const customerId = 2;
    const fetch = jest.fn().mockResolvedValue({
      status: 503
    });
    jest.doMock('fetch-cookie/node-fetch', () => () => fetch);
    mockModulePartially('../../../src/api/customers/login', () => ({
      generateSsoLoginLink: jest.fn()
    }));
    const module = await import('../../../src/api/customers/login');

    await expect(
      module.performLogin(contextMock, customerId)
    ).rejects.toMatchInlineSnapshot(
      '[Error: Something went wrong during the authentication]'
    );
  });

  it('throws an error if Customer Login API redirected to the login URL', async () => {
    const customerId = 2;
    const fetch = jest.fn().mockResolvedValue({
      status: 200,
      url: '/login.php'
    });
    jest.doMock('fetch-cookie/node-fetch', () => () => fetch);
    mockModulePartially('../../../src/api/customers/login', () => ({
      generateSsoLoginLink: jest.fn()
    }));
    const module = await import('../../../src/api/customers/login');

    await expect(
      module.performLogin(contextMock, customerId)
    ).rejects.toMatchInlineSnapshot(
      '[Error: Something went wrong during the authentication]'
    );
  });

  it('generates SSO login link', async () => {
    const customerId = 2;
    const dateCreated = 123456;
    const channelId = '1';
    const uniqueId = 123;
    const uuidv4 = jest.fn().mockReturnValue(uniqueId);
    jest.doMock('uuid', () => ({ v4: uuidv4 }));

    const token = 9876543;
    const jwtSign = jest.fn().mockReturnValue(token);
    jest.doMock('jsonwebtoken', () => ({ sign: jwtSign }));

    const expectedLoginUrl = 'https://final-login-url.com';
    const stringifyUrl = jest.fn().mockReturnValue(expectedLoginUrl);
    jest.doMock('query-string', () => ({ stringifyUrl }));

    const loginEndpoint = '/login-endpoint';
    const storefrontLoginWithToken = jest.fn().mockReturnValue(loginEndpoint);
    jest.doMock('../../../src/helpers/endpointPaths', () => ({
      storefrontLoginWithToken
    }));

    const clientId = 'client-id';
    const secret = 'client-secret';
    const storeHash = 'store-hash';
    const storeUrl = 'https://bc-store.com';
    const guestToken = 'XYY';
    contextMock.config.sdkSettings = {
      ...contextMock.config.sdkSettings,
      clientId,
      secret,
      storeHash,
      storeUrl,
      guestToken
    };
    const redirectUrl = 'a-valid-URL';

    const getTimestampInSeconds = jest.fn().mockReturnValue(dateCreated);
    jest.doMock('../../../src/helpers/date', () => ({
      getTimestampInSeconds
    }));
    mockModulePartially('../../../src/api/customers/login', () => ({}));
    const module = await import('../../../src/api/customers/login');

    const loginUrl = await module.generateSsoLoginLink(
      contextMock,
      customerId,
      redirectUrl
    );

    expect(jwtSign).toBeCalledTimes(1);
    expect(jwtSign).toBeCalledWith(
      {
        customer_id: `${customerId}`,
        iat: dateCreated,
        iss: clientId,
        jti: uniqueId,
        operation: 'customer_login',
        channel_id: channelId,
        store_hash: storeHash,
        redirect_to: redirectUrl
      },
      secret,
      {
        algorithm: 'HS256'
      }
    );
    expect(getTimestampInSeconds).toBeCalledTimes(1);
    expect(getTimestampInSeconds).toBeCalled();
    expect(uuidv4).toBeCalledTimes(1);
    expect(uuidv4).toBeCalled();
    expect(storefrontLoginWithToken).toBeCalledTimes(1);
    expect(storefrontLoginWithToken).toBeCalledWith(token);
    expect(stringifyUrl).toBeCalledTimes(1);
    expect(stringifyUrl).toBeCalledWith({
      url: `${storeUrl}${loginEndpoint}`,
      query: { guestTkn: guestToken }
    });
    expect(loginUrl).toBe(expectedLoginUrl);
  });

  it('verifies if BigCommerce login was successful', async () => {
    const decodedToken = { customer: { id: 3 } };
    const jwtVerify = jest.fn().mockReturnValue(decodedToken);
    jest.doMock('jsonwebtoken', () => ({ verify: jwtVerify }));

    const loggedInCustomerToken = 'asdf123456789';
    const getLoggedInCustomerToken = jest
      .fn()
      .mockReturnValue(loggedInCustomerToken);
    mockModulePartially('../../../src/api/customers/login', () => ({
      getLoggedInCustomerToken
    }));
    const module = await import('../../../src/api/customers/login');
    const customerToken = await module.verifyLogin(contextMock);

    expect(getLoggedInCustomerToken).toBeCalledTimes(1);
    expect(getLoggedInCustomerToken).toBeCalledWith(contextMock);
    expect(jwtVerify).toBeCalledTimes(1);
    expect(jwtVerify).toBeCalledWith(
      loggedInCustomerToken,
      contextMock.config.sdkSettings.devtoolsAppSecret
    );
    expect(customerToken).toBe(loggedInCustomerToken);
  });

  it('throws an error if logged in customer token is invalid', async () => {
    const decodedToken = { error: 'invalid' };
    const jwtVerify = jest.fn().mockReturnValue(decodedToken);
    jest.doMock('jsonwebtoken', () => ({ verify: jwtVerify }));

    const loggedInCustomerToken = 'asdf123456789';
    const getLoggedInCustomerToken = jest
      .fn()
      .mockReturnValue(loggedInCustomerToken);
    mockModulePartially('../../../src/api/customers/login', () => ({
      getLoggedInCustomerToken
    }));
    const module = await import('../../../src/api/customers/login');

    await expect(module.verifyLogin(contextMock)).rejects.toMatchInlineSnapshot(
      '[Error: Invalid token response]'
    );
  });

  it('returns the JWT token with the data of the currently logged in customer', async () => {
    const currentCustomerApiUrl = 'https://current-customer-api.com';
    const stringifyUrl = jest.fn().mockReturnValue(currentCustomerApiUrl);
    jest.doMock('query-string', () => ({ stringifyUrl }));

    const currentCustomerJwtToken = 'asdf123456789';
    const fetchResponseText = jest
      .fn()
      .mockResolvedValue(currentCustomerJwtToken);
    const fetch = jest.fn().mockResolvedValue({
      status: 200,
      text: fetchResponseText
    });
    jest.doMock('fetch-cookie/node-fetch', () => () => fetch);

    const currentCustomerEndpoint = '/current-customer-endpoint';
    jest.doMock('../../../src/helpers/endpointPaths', () => ({
      storefrontCurrentlyLoggedInCustomer: currentCustomerEndpoint
    }));

    mockModulePartially('../../../src/api/customers/login', () => ({}));
    const module = await import('../../../src/api/customers/login');

    const storeUrl = 'https://bc-store.com';
    const guestToken = 'XYY';
    const devtoolsAppClientId = 'devtools-app-client-id';
    contextMock.config.sdkSettings = {
      ...contextMock.config.sdkSettings,
      devtoolsAppClientId,
      storeUrl,
      guestToken
    };

    const customerToken = await module.getLoggedInCustomerToken(contextMock);

    expect(stringifyUrl).toBeCalledTimes(1);
    expect(stringifyUrl).toBeCalledWith({
      url: `${storeUrl}${currentCustomerEndpoint}`,
      query: {
        app_client_id: devtoolsAppClientId,
        guestTkn: guestToken
      }
    });
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(currentCustomerApiUrl);
    expect(fetchResponseText).toBeCalledTimes(1);
    expect(customerToken).toBe(currentCustomerJwtToken);
  });

  it('throws an error if the Current Customer API response is invalid', async () => {
    const currentCustomerApiUrl = 'https://current-customer-api.com';
    const stringifyUrl = jest.fn().mockReturnValue(currentCustomerApiUrl);
    jest.doMock('query-string', () => ({ stringifyUrl }));

    const fetch = jest.fn().mockResolvedValue({
      status: 404
    });
    jest.doMock('fetch-cookie/node-fetch', () => () => fetch);

    const currentCustomerEndpoint = '/current-customer-endpoint';
    jest.doMock('../../../src/helpers/endpointPaths', () => ({
      storefrontCurrentlyLoggedInCustomer: currentCustomerEndpoint
    }));

    mockModulePartially('../../../src/api/customers/login', () => ({}));
    const module = await import('../../../src/api/customers/login');

    const storeUrl = 'https://bc-store.com';
    const guestToken = 'XYY';
    const devtoolsAppClientId = 'devtools-app-client-id';
    contextMock.config.sdkSettings = {
      ...contextMock.config.sdkSettings,
      devtoolsAppClientId,
      storeUrl,
      guestToken
    };

    await expect(
      module.getLoggedInCustomerToken(contextMock)
    ).rejects.toMatchInlineSnapshot('[Error: Invalid token response]');
    expect(stringifyUrl).toBeCalledTimes(1);
    expect(stringifyUrl).toBeCalledWith({
      url: `${storeUrl}${currentCustomerEndpoint}`,
      query: {
        app_client_id: devtoolsAppClientId,
        guestTkn: guestToken
      }
    });
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(currentCustomerApiUrl);
  });

  it('sets the customer data cookie on the response', async () => {
    const tokenToSet = 'asdf123456789';
    const decodedToken = { data: 'without expiration' };
    const jwtDecode = jest.fn().mockReturnValue(decodedToken);
    jest.doMock('jsonwebtoken', () => ({ decode: jwtDecode }));
    const expirationDate = new Date();
    const getDateDaysLater = jest.fn().mockReturnValue(expirationDate);
    jest.doMock('../../../src/helpers/date', () => ({
      getDateDaysLater
    }));
    mockModulePartially('../../../src/api/customers/login', () => ({}));
    const module = await import('../../../src/api/customers/login');
    const jwtTokenExpirationDays = 4;
    const secureCookies = false;
    contextMock.config = {
      ...contextMock.config,
      jwtTokenExpirationDays,
      secureCookies
    };
    const cookie = jest.fn();
    contextMock.res = {
      cookie
    };

    await module.setTokenCookie(contextMock, tokenToSet);

    expect(getDateDaysLater).toBeCalledTimes(1);
    expect(getDateDaysLater).toBeCalledWith(jwtTokenExpirationDays);
    expect(cookie).toBeCalledTimes(1);
    expect(cookie).toBeCalledWith('customer-data', tokenToSet, {
      expires: expirationDate,
      httpOnly: false,
      sameSite: 'Lax',
      secure: false
    });
  });

  it('sets the customer data cookie securely on the response', async () => {
    const tokenToSet = 'asdf123456789';
    const expirationDate = new Date(1644399807229);
    const secureCookies = true;
    const getDateDaysLater = jest.fn().mockReturnValue(expirationDate);
    jest.doMock('../../../src/helpers/date', () => ({
      getDateDaysLater
    }));
    mockModulePartially('../../../src/api/customers/login', () => ({}));
    const module = await import('../../../src/api/customers/login');
    contextMock.config = {
      ...contextMock.config,
      secureCookies
    };
    const cookie = jest.fn();
    contextMock.res = {
      cookie
    };

    await module.setTokenCookie(contextMock, tokenToSet);

    expect(cookie).toBeCalledTimes(1);
    expect(cookie).toBeCalledWith('customer-data', tokenToSet, {
      expires: expirationDate,
      httpOnly: true,
      sameSite: 'Strict',
      secure: true
    });
  });
});
