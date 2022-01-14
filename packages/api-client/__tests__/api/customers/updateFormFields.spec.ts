import { updateCustomerFormFields } from '../../../src/api/customers';
import { contextMock } from '../../../__mocks__/context.mock';
import {
  UpdateCustomerFormFieldsParameters,
  UpdateCustomerFormFieldsResponse
} from '../../../src';

describe('[bigcommerce-api-client] updateCustomerFormFields', () => {
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

    contextMock.client.put = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await updateCustomerFormFields(contextMock, params);

    expect(contextMock.client.put).toHaveBeenCalledTimes(1);
    expect(response).toBe(expectedResponse);
  });
});
