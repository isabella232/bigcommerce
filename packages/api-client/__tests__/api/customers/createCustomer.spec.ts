import { createCustomer } from '../../../src/api/customers/createCustomer';
import { CreateCustomerParameters } from '../../../src/types';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[bigcommerce-api-client] createCustomer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('registers a customer', async () => {
    /* eslint-disable camelcase */
    const parameters = {
      accepts_marketing_emails: true,
      custom_fields: [
        {
          fieldId: '25',
          fieldValue: 'Leave in backyard'
        }
      ],
      email: 'janedoe@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      password: 'string'
    };
    const expectedResponse = {
      data: [
        {
          id: 1,
          authentication: {
            force_password_reset: false
          },
          company: '',
          customer_group_id: 0,
          email: 'janedoe@example.com',
          first_name: 'Jane',
          last_name: 'Doe',
          notes: '',
          phone: '',
          registration_ip_address: '',
          tax_exempt_category: '',
          date_created: '2021-11-05T12:08:22Z',
          date_modified: '2021-11-05T12:08:22Z',
          accepts_product_review_abandoned_cart_emails: false,
          store_credit_amounts: [
            {
              amount: 0
            }
          ],
          channel_ids: null
        }
      ]
    };
    contextMock.client.post = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await createCustomer(contextMock, parameters);

    expect(contextMock.client.post).toHaveBeenCalledTimes(1);
    expect(contextMock.client.post).toHaveBeenCalledWith('/customers', [
      parameters
    ]);
    expect(response).toMatchInlineSnapshot(`
      Object {
        "accepts_product_review_abandoned_cart_emails": false,
        "authentication": Object {
          "force_password_reset": false,
        },
        "channel_ids": null,
        "company": "",
        "customer_group_id": 0,
        "date_created": "2021-11-05T12:08:22Z",
        "date_modified": "2021-11-05T12:08:22Z",
        "email": "janedoe@example.com",
        "first_name": "Jane",
        "id": 1,
        "last_name": "Doe",
        "notes": "",
        "phone": "",
        "registration_ip_address": "",
        "store_credit_amounts": Array [
          Object {
            "amount": 0,
          },
        ],
        "tax_exempt_category": "",
      }
    `);
  });

  it('throws an error if there is a error response from the API', async () => {
    /* eslint-disable camelcase */
    const parameters = {
      accepts_marketing_emails: true,
      custom_fields: [
        {
          fieldId: '25',
          fieldValue: 'Leave in backyard'
        }
      ],
      email: 'janedoe@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      password: 'string'
    };
    const expectedError = 'API error';
    contextMock.client.post = jest.fn(() => Promise.reject(expectedError));

    await expect(
      createCustomer(contextMock, parameters)
    ).rejects.toMatchInlineSnapshot('"API error"');
    expect(contextMock.client.post).toHaveBeenCalledTimes(1);
    expect(contextMock.client.post).toHaveBeenCalledWith('/customers', [
      parameters
    ]);
  });

  it('throws an error if parameters are missing', async () => {
    /* eslint-disable camelcase */
    const parameters = {
      acceptsMarketingEmails: true,
      password: 'string'
    };
    await expect(
      createCustomer(
        contextMock,
        (parameters as unknown) as CreateCustomerParameters
      )
    ).rejects.toMatchInlineSnapshot('[Error: Required parameters missing.]');
    expect(contextMock.client.post).not.toHaveBeenCalled();
  });
});
