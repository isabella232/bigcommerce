import { GetAllWishlistQuery } from '../../../src/types';
import { getAllWishlists } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[BigCommerce-api-client] get product reviews', () => {
  it('should call the right endpoint', async () => {
    // Given
    contextMock.client.get = jest.fn();
    const expectedEndpoint = '/wishlists';

    // When
    await getAllWishlists(contextMock);

    // Then
    expect(contextMock.client.get).toHaveBeenCalledWith(expectedEndpoint);
  });

  it('should use query params (if setted) for get client function', async () => {
    // Given
    contextMock.client.get = jest.fn();

    const query: GetAllWishlistQuery = {
      customer_id: 1,
      limit: 50,
      page: 1
    };

    // When
    await getAllWishlists(contextMock, query);

    // Then
    expect(contextMock.client.get)
      .toHaveBeenCalledWith(`/wishlists?customer_id=${query.customer_id}&limit=${query.limit}&page=${query.page}`);
  });
});
