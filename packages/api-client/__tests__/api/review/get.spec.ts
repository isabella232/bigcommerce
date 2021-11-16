import { GetProductReviewProps } from '../../../src/types/review';
import { getProductReview } from '../../../src/api/review';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[BigCommerce-api-client] get product review', () => {
  it('should validate the executed props for get client function', async () => {
    // Given
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };
    contextMock.client.get.mockImplementationOnce(() => Promise.resolve());
    const expectedProductId = 1;
    const expectedReviewId = 2;
    const props: GetProductReviewProps = {
      productId: expectedProductId,
      reviewId: expectedReviewId
    };

    // When
    await getProductReview(contextMock, props);

    // Then
    expect(getMock).toHaveBeenCalledWith(`/catalog/products/${expectedProductId}/reviews/${expectedReviewId}`);
  });

  it('should thorw an error when productId were not provided', async () => {
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };

    const props = {
      productId: undefined,
      reviewId: 1
    };

    expect(getProductReview(contextMock, props)).rejects.toMatch('error');
  });

  it('should thorw an error when reviewId were not provided', () => {
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };

    const props = {
      productId: 1,
      reviewId: undefined
    };

    expect(getProductReview(contextMock, props)).rejects.toMatch('error');
  });

  it('should pass with valid props', async () => {
    // Given
    const getMock = jest.fn();
    contextMock.client = {
      get: getMock
    };
    contextMock.client.get.mockImplementationOnce(() => Promise.resolve());
    const expectedProductId = 1;
    const expectedReviewId = 2;
    const props: GetProductReviewProps = {
      productId: expectedProductId,
      reviewId: expectedReviewId
    };

    // When
    await getProductReview(contextMock, props);

    // Then
    expect(contextMock.client.get).toHaveBeenCalledTimes(1);
    expect(getMock).toHaveReturned();
  });
});
