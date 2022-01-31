import { getCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';
import * as CartResponseHelpers from '../../../src/helpers/cartResponse';

describe('[bigcommerce-api-client] getCart', () => {
  const params = {
    id: '13fc44e8-d5c1-435d-a101-e9f76b7ef0f9'
  };
  const prepareEmbeddedCheckoutUrlOnResponse = jest.spyOn(
    CartResponseHelpers,
    'prepareEmbeddedCheckoutUrlOnResponse'
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get a cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };
    contextMock.client.v3.get = jest.fn(() => Promise.resolve(expectedResponse));

    const response = await getCart(contextMock, params);

    expect(response).toBe(expectedResponse);
    expect(contextMock.client.v3.get).toBeCalledTimes(1);
    expect(contextMock.client.v3.get).toBeCalledWith(BigCommerceEndpoints.cart(params.id));
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(contextMock, response);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;
    contextMock.client.v3.get = jest.fn();

    const response = await getCart(contextMock, { ...params, include });

    expect(contextMock.client.v3.get).toBeCalledTimes(1);
    expect(contextMock.client.v3.get).toBeCalledWith(`${BigCommerceEndpoints.cart(params.id)}?include=${include}`);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledTimes(1);
    expect(prepareEmbeddedCheckoutUrlOnResponse).toHaveBeenCalledWith(contextMock, response);
  });
});
