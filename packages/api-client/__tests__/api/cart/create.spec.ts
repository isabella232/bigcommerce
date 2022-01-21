import queryString from 'query-string';
import { createCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';

describe('[bigcommerce-api-client] create cart', () => {
  const params = {
    data: {
      line_items: []
    }
  };

  it('should create a cart without items', async () => {
    const expectedResponse = {
      data: {
        base_amount: 0,
        cart_amount: 0,
        channel_id: 1,
        coupons: [],
        created_time: '2021-11-24T14:13:12+00:00',
        currency: {
          code: 'PLN'
        },
        customer_id: 0,
        discount_amount: 0,
        email: '',
        id: '11e712f0-1972-41a9-9dba-f042a650b282',
        line_items: {
          custom_items: [],
          digital_items: [],
          gift_certificates: [],
          physical_items: []
        },
        locale: 'en',
        tax_included: false,
        updated_time: '2021-11-24T14:13:13+00:00'
      },
      meta: {}
    };

    contextMock.client.v3.post = (url: string, data: Record<string, unknown>) => {
      expect(url).toEqual(BigCommerceEndpoints.cart());

      expect(data).toEqual(params.data);

      return expectedResponse;
    };

    const response = await createCart(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.v3.post = (url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    };

    await createCart(contextMock, { ...params, include });
  });
});
