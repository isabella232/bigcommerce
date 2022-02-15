import { CartIncludeEnum } from '../../../src';
import { addCartItems } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import * as CartResponseHelpers from '../../../src/helpers/cartResponse';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';

describe('[bigcommerce-api-client] add items to cart', () => {
  const cartId = '1095e7e1-2f2b-463d-9e39-bfc070b8e7e4';
  const prepareEmbeddedCheckoutUrlOnResponse = jest.spyOn(CartResponseHelpers, 'prepareEmbeddedCheckoutUrlOnResponse');
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add an item to the cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };
    contextMock.client.v3.post = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await addCartItems(contextMock, params);

    expect(response).toBe(expectedResponse);
    expect(contextMock.client.v3.post).toBeCalledTimes(1);
    expect(contextMock.client.v3.post).toBeCalledWith(BigCommerceEndpoints.cartItems(cartId), params.data);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(contextMock, response);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;
    contextMock.client.v3.post = jest.fn();

    const response = await addCartItems(contextMock, { ...params, include });

    expect(contextMock.client.v3.post).toBeCalledTimes(1);
    expect(contextMock.client.v3.post).toBeCalledWith(`${BigCommerceEndpoints.cartItems(cartId)}?include=${include}`, params.data);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(contextMock, response);
  });
  it('should not pass a list_price property to the request payload', async () => {
    const paramsWithListPrice = {
      cartId,
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

    contextMock.client.v3.post = jest.fn();
    await addCartItems(contextMock, paramsWithListPrice);
    expect(contextMock.client.v3.post).toBeCalledTimes(1);
    expect(contextMock.client.v3.post).toBeCalledWith(BigCommerceEndpoints.cartItems(cartId), params.data);
  });
});
