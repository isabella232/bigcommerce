import { RemoveWishlistItemParams } from '../../../src/types';
import { removeWishlistItem } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[BigCommerce-api-client] add wishlist items', () => {
  const wishlistId = 1;
  const itemId = 1;

  beforeEach(() => {
    contextMock.client.delete = jest.fn(() => Promise.resolve());
  });

  it('should call api with expected props', async () => {
    // Given
    const params: RemoveWishlistItemParams = { wishlistId, itemId };

    // When
    await removeWishlistItem(contextMock, params);

    // Then
    expect(contextMock.client.delete)
      .toHaveBeenLastCalledWith(BigCommerceEndpoints.wishlistItems(wishlistId, itemId));
  });

  it('should throw an error when wishlist id was not provided', async () => {
    const params: RemoveWishlistItemParams = { wishlistId: undefined, itemId };

    try {
      await removeWishlistItem(contextMock, params);
    } catch (error) {
      const expectedErrorMessage = `Wishlist id with value: ${params.wishlistId} is not valid. Use number value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.delete).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when item id was not provided', async () => {
    const params: RemoveWishlistItemParams = { wishlistId, itemId: undefined };

    try {
      await removeWishlistItem(contextMock, params);
    } catch (error) {
      const expectedErrorMessage = `Item id with value: ${params.itemId} is not valid. Use number value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.delete).toHaveBeenCalledTimes(0);
    }
  });
});
