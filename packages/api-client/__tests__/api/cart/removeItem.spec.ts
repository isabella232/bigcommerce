import { CartIncludeEnum } from '../../../src';
import { removeCartItem } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';
import * as CartResponseHelpers from '../../../src/helpers/cartResponse';

describe('[bigcommerce-api-client] remove item from cart', () => {
  const itemId = mockedCart.line_items.physical_items[0].id;
  const params = {
    cartId: mockedCart.id,
    itemId
  };
  const prepareEmbeddedCheckoutUrlOnResponse = jest.spyOn(
    CartResponseHelpers,
    'prepareEmbeddedCheckoutUrlOnResponse'
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should remove an item from the cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };
    contextMock.client.v3.delete = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await removeCartItem(contextMock, params);

    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.delete).toHaveBeenCalledWith(
      BigCommerceEndpoints.cartItems(mockedCart.id, itemId)
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
    contextMock.client.v3.delete = jest.fn();

    const response = await removeCartItem(contextMock, { ...params, include });

    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.delete).toHaveBeenCalledWith(
      `${BigCommerceEndpoints.cartItems(
        mockedCart.id,
        itemId
      )}?include=${include}`
    );
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(
      contextMock,
      response
    );
  });
});
