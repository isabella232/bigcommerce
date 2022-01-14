import { createCustomer } from '../../../src/api/customers/create';
import { CreateCustomerParameters } from '../../../src/types';
import { contextMock } from '../../../__mocks__/context.mock';
import * as DateHelpers from '../../../src/helpers/date';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import jwt from 'jsonwebtoken';

const jwtSignMock = jest.spyOn(jwt, 'sign');
const getDateDaysLater = jest.spyOn(DateHelpers, 'getDateDaysLater');

describe('[bigcommerce-api-client] createCustomer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('registers a customer and sets customer data cookie', async () => {
    const parameters = {
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
    contextMock.client.post = jest.fn(() => Promise.resolve(expectedResponse));
    const jwtTokenExpirationDays = 4;
    const secureCookies = false;
    contextMock.config = {
      ...contextMock.config,
      jwtTokenExpirationDays,
      secureCookies
    };
    const customerDataToken = 'token123';
    jwtSignMock.mockImplementation(() => customerDataToken);
    const expirationDate = new Date();
    getDateDaysLater.mockReturnValue(expirationDate);
    const cookie = jest.fn();
    contextMock.res = {
      cookie
    };
    const expectedJwtPayload = {
      customer: {
        id: expectedResponse.data[0].id,
        email: expectedResponse.data[0].email,
        group_id: expectedResponse.data[0].customer_group_id
      }
    };

    const response = await createCustomer(contextMock, parameters);

    expect(contextMock.client.post).toHaveBeenCalledTimes(1);
    expect(contextMock.client.post).toHaveBeenCalledWith('/customers', [
      parameters
    ]);
    expect(jwtSignMock).toBeCalledTimes(1);
    expect(jwtSignMock).toBeCalledWith(expectedJwtPayload, '', {
      algorithm: 'HS256'
    });
    expect(getDateDaysLater).toBeCalledWith(jwtTokenExpirationDays);
    expect(getDateDaysLater).toBeCalledTimes(1);
    expect(cookie).toBeCalledWith(COOKIE_KEY_CUSTOMER_DATA, customerDataToken, {
      expires: expirationDate,
      httpOnly: false,
      secure: false,
      sameSite: 'Lax'
    });
    expect(cookie).toBeCalledTimes(1);
    expect(response).toMatchInlineSnapshot(`
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

  it('throws an error if there is an error response from the API', async () => {
    const parameters = {
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
