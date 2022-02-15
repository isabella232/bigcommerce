import { CartIncludeEnum } from '../../../src';
import { updateCartItem } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';
import * as CartResponseHelpers from '../../../src/helpers/cartResponse';

describe('[bigcommerce-api-client] update a cart item', () => {
  const product = mockedCart.line_items.physical_items[0];
  const params = {
    cartId: mockedCart.id,
    itemId: product.id,
    data: {
      line_item: {
        product_id: product.product_id,
        quantity: 2
      }
    }
  };
  const prepareEmbeddedCheckoutUrlOnResponse = jest.spyOn(
    CartResponseHelpers,
    'prepareEmbeddedCheckoutUrlOnResponse'
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update a cart item', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };
    contextMock.client.v3.put = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await updateCartItem(contextMock, params);

    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.put).toHaveBeenCalledWith(
      BigCommerceEndpoints.cartItems(mockedCart.id, product.id),
      params.data
    );
    expect(response).toBe(expectedResponse);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(
      contextMock,
      response
    );
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;
    contextMock.client.v3.put = jest.fn();

    const response = await updateCartItem(contextMock, { ...params, include });

    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.put).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.cartItems(
        mockedCart.id,
        product.id
      )}?include=${include}`,
      params.data
    );
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(
      contextMock,
      response
    );
  });
  it('should not pass list_price property to the the request payload', async () => {
    const paramsWithListPrice = {
      cartId: mockedCart.id,
      itemId: product.id,
      data: {
        line_item: {
          product_id: product.product_id,
          quantity: 2,
          list_price: 49.99
        }
      }
    };

    contextMock.client.v3.put = jest.fn();
    await updateCartItem(contextMock, paramsWithListPrice);
    expect(contextMock.client.v3.put).toBeCalledTimes(1);
    expect(contextMock.client.v3.put).toBeCalledWith(BigCommerceEndpoints.cartItems(mockedCart.id, product.id), params.data);
  });
});
