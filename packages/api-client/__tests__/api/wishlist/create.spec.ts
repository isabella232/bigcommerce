import { CreateWishlistProps } from '../../../src/types';
import { createWishlist } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[BigCommerce-api-client] create wishlist', () => {
  beforeEach(() => {
    contextMock.client.post = jest.fn(() => Promise.resolve());
  });

  it('should call api with expected props', async () => {
    // Given
    const props: CreateWishlistProps = {
      name: 'Test wishlist',
      customer_id: 1,
      is_public: true,
      items: []
    };

    // When
    await createWishlist(contextMock, props);

    // Then
    expect(contextMock.client.post).toHaveBeenLastCalledWith(BigCommerceEndpoints.wishlists, props);
  });

  it('should throw an error when name was not provided', async () => {
    const props: CreateWishlistProps = {
      name: undefined,
      customer_id: 1,
      is_public: true,
      items: []
    };

    try {
      await createWishlist(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Name with value: ${props.name} is not valid. Use string value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.post).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when customer id was not provided', async () => {
    const props: CreateWishlistProps = {
      name: 'Test wishlist',
      customer_id: undefined,
      is_public: true,
      items: []
    };

    try {
      await createWishlist(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Customer ID with value: ${props.customer_id} is not valid. Use number value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.post).toHaveBeenCalledTimes(0);
    }
  });
});
