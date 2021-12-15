import { GetAllWishlistQuery } from '../../../src/types';
import { getAllWishlists } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[BigCommerce-api-client] get product reviews', () => {
  it('should call the right endpoint', async () => {
    // Given
    contextMock.client.get = jest.fn();

    // When
    await getAllWishlists(contextMock);

    // Then
    expect(contextMock.client.get).toHaveBeenCalledWith(BigCommerceEndpoints.wishlists);
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
