import queryString from 'query-string';
import { getCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';

describe('[bigcommerce-api-client] getCart', () => {
  const params = {
    id: '13fc44e8-d5c1-435d-a101-e9f76b7ef0f9'
  };

  it('should get a cart', async () => {
    const expectedResponse = {
      data: {
        base_amount: 545,
        cart_amount: 545,
        channel_id: 1,
        coupons: [],
        created_time: '2021-11-29T12:44:09+00:00',
        currency: {
          code: 'PLN'
        },
        customer_id: 0,
        discount_amount: 0,
        email: '',
        id: '13fc44e8-d5c1-435d-a101-e9f76b7ef0f9',
        line_items: {
          custom_items: [],
          digital_items: [],
          gift_certificates: [],
          physical_items: [
            {
              coupon_amount: 0,
              coupons: [],
              discount_amount: 0,
              discounts: [],
              extended_list_price: 545,
              extended_sale_price: 545,
              id: 'c16d7122-ae4a-4afb-8806-203c7c55465d',
              image_url:
                'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/80/images/272/roundterrariumlarge.1633499289.220.290.jpg?c=1',
              is_mutable: true,
              is_require_shipping: true,
              list_price: 109,
              name: '[Sample] Orbit Terrarium - Large',
              parent_id: null,
              product_id: 80,
              quantity: 5,
              sale_price: 109,
              sku: 'OTL',
              taxable: true,
              url:
                'https://vuestorefront.mybigcommerce.com/orbit-terrarium-large/',
              variant_id: 64
            }
          ]
        },
        locale: 'en',
        tax_included: false,
        updated_time: '2021-11-29T12:44:10+00:00'
      },
      meta: {}
    };

    contextMock.client.get = (url: string) => {
      expect(url).toEqual(BigCommerceEndpoints.cart(params.id));

      return expectedResponse;
    };

    const response = await getCart(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.get = (url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    };

    await getCart(contextMock, { ...params, include });
  });
});
