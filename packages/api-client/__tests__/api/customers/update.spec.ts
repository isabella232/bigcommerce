import { updateCustomer } from '../../../src/api/customers/update';
import { UpdateCustomerParameters } from '../../../src/types';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[bigcommerce-api-client] updateCustomer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('update a customer', async () => {
    const parameters = {
      id: 1,
      email: 'janedoe@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      password: 'string',
      channel_ids: [1]
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
          channel_ids: [1]
        }
      ]
    };
    contextMock.client.v3.put = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await updateCustomer(contextMock, parameters);

    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.put).toHaveBeenCalledWith('/customers', [
      parameters
    ]);

    expect(response.data[0]).toMatchInlineSnapshot(`
      Object {
        "accepts_product_review_abandoned_cart_emails": false,
        "authentication": Object {
          "force_password_reset": false,
        },
        "channel_ids": Array [
          1,
        ],
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
    const parameters = {
      id: 1,
      accepts_product_review_abandoned_cart_emails: true,
      custom_fields: [
        {
          fieldId: '25',
          fieldValue: 'Leave in backyard'
        }
      ],
      email: 'janedoe@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      password: 'string',
      channel_ids: [1]
    };
    const expectedError = 'API error';
    contextMock.client.v3.put = jest.fn(() => Promise.reject(expectedError));

    await expect(
      updateCustomer(contextMock, parameters)
    ).rejects.toMatchInlineSnapshot('"API error"');
    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.put).toHaveBeenCalledWith('/customers', [
      parameters
    ]);
  });

  it('throws an error if parameters are missing', async () => {
    /* eslint-disable camelcase */
    // missing required param id
    const parameters = {
      id: 1,
      email: 'janedoe@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      password: 'string',
      channel_ids: [1]
    };
    await expect(
      updateCustomer(contextMock, parameters as UpdateCustomerParameters)
    ).rejects.toMatchInlineSnapshot('"API error"');
    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
  });
});
