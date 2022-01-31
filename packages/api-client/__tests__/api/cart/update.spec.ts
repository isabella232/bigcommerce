import { updateCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';
import * as CartResponseHelpers from '../../../src/helpers/cartResponse';

describe('[bigcommerce-api-client] update cart', () => {
  const cartId = '11e712f0-1972-41a9-9dba-f042a650b282';
  const params = {
    id: cartId,
    data: {
      customer_id: 10
    }
  };
  const prepareEmbeddedCheckoutUrlOnResponse = jest.spyOn(
    CartResponseHelpers,
    'prepareEmbeddedCheckoutUrlOnResponse'
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update the customer_id of the cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };
    contextMock.client.v3.put = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await updateCart(contextMock, params);

    expect(response).toBe(expectedResponse);
    expect(contextMock.client.v3.put).toBeCalledTimes(1);
    expect(contextMock.client.v3.put).toBeCalledWith(
      BigCommerceEndpoints.cart(cartId),
      params.data
    );
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(
      contextMock,
      response
    );
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;
    contextMock.client.v3.put = jest.fn();

    const response = await updateCart(contextMock, { ...params, include });

    expect(contextMock.client.v3.put).toBeCalledTimes(1);
    expect(contextMock.client.v3.put).toBeCalledWith(
      `${BigCommerceEndpoints.cart(cartId)}?include=${include}`,
      params.data
    );
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(
      contextMock,
      response
    );
  });
});
