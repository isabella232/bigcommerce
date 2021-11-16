import { contextMock } from '../__mocks__';
import { register } from '../src/useUser/actions';

describe('[Composable] useUser', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('methods', () => {
    describe('register', () => {
      it('calls createCustomer API method and returns its response', async () => {
        const userParameters = {
          email: 'janedoe@example.com',
          firstName: 'Jane',
          lastName: 'Doe',
          password: 'string',
          acceptsMarketingEmails: true,
          customFields: []
        };
        const expectedResponse = {
          email: 'janedoe@example.com',
          id: 1
        };
        contextMock.$bigcommerce.api.createCustomer = jest.fn(
          () => expectedResponse
        ) as any;

        const response = await register(contextMock, userParameters);

        expect(contextMock.$bigcommerce.api.createCustomer).toBeCalledTimes(1);
        /* eslint-disable camelcase */
        expect(contextMock.$bigcommerce.api.createCustomer).toBeCalledWith({
          first_name: userParameters.firstName,
          last_name: userParameters.lastName,
          email: userParameters.email,
          password: userParameters.password,
          accepts_marketing_emails: userParameters.acceptsMarketingEmails,
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
  });
});
