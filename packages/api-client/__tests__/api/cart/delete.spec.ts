import { deleteCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[bigcommerce-api-client] delete cart', () => {
  const cartId = '1095e7e1-2f2b-463d-9e39-bfc070b8e7e4';

  it('should delete the cart', async () => {
    contextMock.client.v3.delete = jest.fn(() => Promise.resolve(''));

    const response = await deleteCart(contextMock, { id: cartId });

    expect(response).toBeFalsy();
    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.delete).toHaveBeenCalledWith(
      BigCommerceEndpoints.cart(cartId)
    );
  });
});
