import { createCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';
import * as CartResponseHelpers from '../../../src/helpers/cartResponse';

describe('[bigcommerce-api-client] create cart', () => {
  const params = {
    data: {
      line_items: []
    }
  };
  const prepareEmbeddedCheckoutUrlOnResponse = jest.spyOn(
    CartResponseHelpers,
    'prepareEmbeddedCheckoutUrlOnResponse'
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    contextMock.client.v3.post = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await createCart(contextMock, params);

    expect(response).toBe(expectedResponse);
    expect(contextMock.client.v3.post).toBeCalledTimes(1);
    expect(contextMock.client.v3.post).toBeCalledWith(
      BigCommerceEndpoints.cart(),
      params.data
    );
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(contextMock, response);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;
    contextMock.client.v3.post = jest.fn();

    const response = await createCart(contextMock, { ...params, include });

    expect(contextMock.client.v3.post).toBeCalledTimes(1);
    expect(contextMock.client.v3.post).toBeCalledWith(
      `${BigCommerceEndpoints.cart()}?include=${include}`,
      params.data
    );
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(contextMock, response);
  });

  it('should not pass a list_price property to the request payload', async () => {
    const paramsWithListPrice = {
      data: {
        line_items: [
          {
            quantity: 2,
            product_id: 80,
            list_price: 49.99
          }
        ]
      }
    };

    const paramsWithoutListPrice = {
      data: {
        line_items: [
          {
            quantity: 2,
            product_id: 80
          }
        ]
      }
    };

    contextMock.client.v3.post = jest.fn();
    await createCart(contextMock, paramsWithListPrice);
    expect(contextMock.client.v3.post).toBeCalledTimes(1);
    expect(contextMock.client.v3.post).toBeCalledWith(BigCommerceEndpoints.cart(), paramsWithoutListPrice.data);
  });
});
