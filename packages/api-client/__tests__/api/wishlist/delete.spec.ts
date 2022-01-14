import { deleteWishlist } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[BigCommerce-api-client] delete wishlist', () => {
  const wishlistId = 1;

  beforeEach(() => {
    contextMock.client.delete = jest.fn(() => Promise.resolve(null));
  });

  it('should call api with expected props', async () => {
    const expectedEndpoint = `/wishlists/${wishlistId}`;
    // When
    await deleteWishlist(contextMock, wishlistId);

    // Then
    expect(contextMock.client.delete).toHaveBeenLastCalledWith(expectedEndpoint);
  });

  it('should throw an error when wishlist id was not provided', async () => {
    const expectedErrorMessage = `Wishlist id with value: ${undefined} is not valid. Use number value.`;

    try {
      await deleteWishlist(contextMock, undefined);
    } catch (error) {
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.delete).toHaveBeenCalledTimes(0);
    }
  });
});
