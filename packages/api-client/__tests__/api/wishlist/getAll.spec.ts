import { GetAllWishlistQuery } from '../../../src/types';
import { getAllWishlists } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import jwt from 'jsonwebtoken';

const customerId = 1;
const jwtVerifyMock = jest.spyOn(jwt, 'verify');
jwtVerifyMock.mockReturnValue({ customer: { id: customerId } });
contextMock.req = {
  cookies: {
    [COOKIE_KEY_CUSTOMER_DATA]: 'token'
  }
};

describe('[BigCommerce-api-client] get all wishlists reviews', () => {
  it('should call the right endpoint', async () => {
    // Given
    contextMock.client.v3.get = jest.fn();
    const expectedEndpoint = `/wishlists?customer_id=${customerId}`;

    // When
    await getAllWishlists(contextMock);

    // Then
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(expectedEndpoint);
  });

  it('should use query params (if setted) for get client function', async () => {
    // Given
    contextMock.client.v3.get = jest.fn();

    const query: GetAllWishlistQuery = {
      limit: 50,
      page: 1
    };

    // When
    await getAllWishlists(contextMock, query);

    // Then
    expect(contextMock.client.v3.get)
      .toHaveBeenCalledWith(`/wishlists?customer_id=${customerId}&limit=${query.limit}&page=${query.page}`);
  });

  it('should throw an error when customer id was not provided', async () => {
    contextMock.client.v3.get = jest.fn();

    jwtVerifyMock.mockReturnValue({ customer: { id: undefined } });

    try {
      await getAllWishlists(contextMock);
    } catch (error) {
      const expectedErrorMessage = 'No customer ID';
      expect(error.error).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.v3.get).toHaveBeenCalledTimes(0);
    }
  });
});
