import { updateCustomerFormFields } from '../../../src/api/customers';
import { contextMock } from '../../../__mocks__/context.mock';
import {
  UpdateCustomerFormFieldsParameters,
  UpdateCustomerFormFieldsResponse
} from '../../../src';
import {
  COOKIE_KEY_CUSTOMER_DATA
} from '../../../src';
import jwt from 'jsonwebtoken';

describe('[bigcommerce-api-client] updateCustomerFormFields', () => {

  const jwtVerifyMock = jest.spyOn(jwt, 'verify');
  const jwtDecodeMock = jest.spyOn(jwt, 'decode');

  const token = 'token123';
  const customerId = 1;
  const decodedToken = { customer: { id: customerId } };
  jwtVerifyMock.mockReturnValue(decodedToken);
  jwtDecodeMock.mockReturnValue(decodedToken);
  contextMock.req = {
    cookies: {
      [COOKIE_KEY_CUSTOMER_DATA]: token
    }
  };
  it('should update the value of a form field on the customer', async () => {
    const params: UpdateCustomerFormFieldsParameters = {
      data: [
        {
          customer_id: 40,
          name: 'Cart ID',
          value: 'test-cart-id'
        }
      ]
    };

    const expectedResponse: UpdateCustomerFormFieldsResponse = {
      data: params.data,
      meta: {}
    };

    contextMock.client.v3.put = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await updateCustomerFormFields(contextMock, params);

    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(response).toBe(expectedResponse);
  });
});
