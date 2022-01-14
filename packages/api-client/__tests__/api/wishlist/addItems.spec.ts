import { AddWishlistItemsParams } from '../../../src/types';
import { addWishlistItems } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[BigCommerce-api-client] add wishlist items', () => {
  const wishlistId = 1;

  beforeEach(() => {
    contextMock.client.post = jest.fn(() => Promise.resolve());
  });

  it('should call api with expected props', async () => {
    // Given
    const props: AddWishlistItemsParams = {
      wishlistId,
      items: [{
        product_id: 1,
        variant_id: 1
      }]
    };
    const expectedParams = { items: props.items };

    // When
    await addWishlistItems(contextMock, props);

    // Then
    expect(contextMock.client.post)
      .toHaveBeenLastCalledWith(BigCommerceEndpoints.wishlistItems(wishlistId), expectedParams);
  });

  it('should throw an error when wishlist id was not provided', async () => {
    const props: AddWishlistItemsParams = {
      wishlistId: undefined,
      items: [{
        product_id: 1,
        variant_id: 1
      }]
    };

    try {
      await addWishlistItems(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Wishlist id with value: ${props.wishlistId} is not valid. Use number value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.post).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when items were not provided', async () => {
    const props: AddWishlistItemsParams = {
      wishlistId,
      items: undefined
    };

    try {
      await addWishlistItems(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Wishlist items with value: ${props.items} are not valid. Use non-empty array of wishlist items.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.post).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when items array is empty', async () => {
    const props: AddWishlistItemsParams = {
      wishlistId,
      items: []
    };

    try {
      await addWishlistItems(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Wishlist items with value: ${props.items} are not valid. Use non-empty array of wishlist items.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.post).toHaveBeenCalledTimes(0);
    }
  });
});
