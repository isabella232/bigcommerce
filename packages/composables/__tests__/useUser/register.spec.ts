import { contextMock } from '../../__mocks__';

describe('[bigcommerce-composables] useUser register', () => {
  it('calls createCustomer API method and returns its response', async () => {
    const userParameters = {
      email: 'janedoe@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      password: 'string',
      acceptsMarketingEmails: true,
      customFields: [],
      channelIds: [1]
    };
    const expectedResponse = {
      email: 'janedoe@example.com',
      id: 1
    };
    contextMock.$bigcommerce.api.createCustomer = jest.fn(
      () => expectedResponse
    );
    const logIn = jest.fn();
    jest.doMock('../../src/useUser/actions/login', () => ({
      logIn
    }));
    const module = await import('../../src/useUser/actions/register');

    const response = await module.register(contextMock, userParameters);

    expect(logIn).toBeCalledTimes(1);
    expect(logIn).toBeCalledWith(contextMock, { username: userParameters.email, password: userParameters.password });
    expect(contextMock.$bigcommerce.api.createCustomer).toBeCalledTimes(1);
    expect(contextMock.$bigcommerce.api.createCustomer).toBeCalledWith({
      first_name: userParameters.firstName,
      last_name: userParameters.lastName,
      email: userParameters.email,
      password: userParameters.password,
      accepts_product_review_abandoned_cart_emails:
        userParameters.acceptsMarketingEmails,
      channel_ids: userParameters.channelIds,
      custom_fields: userParameters.customFields
    });
    expect(response).toMatchInlineSnapshot(`
          Object {
            "email": "janedoe@example.com",
            "id": 1,
          }
        `);
  });
});
