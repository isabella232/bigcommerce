import { stringifyUrl } from 'query-string';
import { GetProductReviewCollectionProps, GetProductReviewCollectionQuery } from '../../../src/types';
import { getProductReviewCollection } from '../../../src/api/review';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[BigCommerce-api-client] get product reviews', () => {
  it('should validate the executed props for get client function', async () => {
    // Given
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };
    contextMock.client.get.mockImplementationOnce(() => Promise.resolve());
    const expectedProductId = 1;
    const props: GetProductReviewCollectionProps = {
      productId: expectedProductId
    };

    // When
    await getProductReviewCollection(contextMock, props);

    // Then
    expect(getMock).toHaveBeenCalledWith(`/catalog/products/${expectedProductId}/reviews`);
  });

  it('should use query params (if setted) for get client function', async () => {
    // Given
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };
    contextMock.client.get.mockImplementationOnce(() => Promise.resolve());
    const expectedProductId = 1;
    const props: GetProductReviewCollectionProps = {
      productId: expectedProductId
    };

    const query: GetProductReviewCollectionQuery = {
      include_fields: 'title,product_id',
      exclude_fields: 'date_created,date_modified',
      limit: 10,
      page: 10,
      status: 0
    };

    // When
    await getProductReviewCollection(contextMock, props, query);

    // Then
    expect(getMock).toHaveBeenCalledWith(stringifyUrl({ url: `/catalog/products/${expectedProductId}/reviews`, query }));
  });

  it('should thorw an error when productId were not provided', async () => {
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };

    const props = {
      productId: undefined
    };

    try {
      await getProductReviewCollection(contextMock, props);
    } catch (error) {
      expect(error.message).toBe(`ProductId with value: ${props.productId} is not valid. Use number value.`);
    } finally {
      expect(getMock).toHaveBeenCalledTimes(0);
    }
  });

  it('should pass with valid props', async () => {
    // Given
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };
    contextMock.client.get.mockImplementationOnce(() => Promise.resolve());
    const expectedProductId = 1;
    const props: GetProductReviewCollectionProps = {
      productId: expectedProductId
    };

    // When
    await getProductReviewCollection(contextMock, props);

    // Then
    expect(contextMock.client.get).toHaveBeenCalledTimes(1);
    expect(getMock).toHaveReturned();
  });
});
