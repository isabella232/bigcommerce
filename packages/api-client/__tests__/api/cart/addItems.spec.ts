import queryString from 'query-string';
import { addCartItems } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[bigcommerce-api-client] add items to cart', () => {
  const cartId = '1095e7e1-2f2b-463d-9e39-bfc070b8e7e4';

  const params = {
    cartId,
    data: {
      line_items: [
        {
          quantity: 2,
          product_id: 80
        }
      ]
    }
  };

  it('should add an item to the cart', async () => {
    const expectedResponse = {
      data: {
        base_amount: 763,
        cart_amount: 763,
        channel_id: 1,
        coupons: [],
        created_time: '2021-11-24T08:45:02+00:00',
        currency: {
          code: 'PLN'
        },
        customer_id: 0,
        discount_amount: 0,
        email: '',
        id: '1095e7e1-2f2b-463d-9e39-bfc070b8e7e4',
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
              extended_list_price: 763,
              extended_sale_price: 763,
              id: '8b73ca20-eea0-40fe-8ee6-4ef7892f5d09',
              image_url:
                'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/80/images/272/roundterrariumlarge.1633499289.220.290.jpg?c=1',
              is_mutable: true,
              is_require_shipping: true,
              list_price: 109,
              name: '[Sample] Orbit Terrarium - Large',
              parent_id: null,
              product_id: 80,
              quantity: 2,
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
        updated_time: '2021-11-24T08:46:05+00:00'
      },
      meta: {}
    };

    contextMock.client.post = (url: string, data: Record<string, unknown>) => {
      expect(url).toEqual(BigCommerceEndpoints.cartItems(cartId));

      expect(data).toEqual(params.data);

      return expectedResponse;
    };

    const response = await addCartItems(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = 'line_items.physical_items.options';

    contextMock.client.post = (url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    };

    await addCartItems(contextMock, { ...params, include });
  });
});
