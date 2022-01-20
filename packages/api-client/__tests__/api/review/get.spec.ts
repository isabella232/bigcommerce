import { GetProductReviewProps } from '../../../src/types';
import { getProductReview } from '../../../src/api/review';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[BigCommerce-api-client] get product review', () => {
  it('should validate the executed props for get client function', async () => {
    // Given
    contextMock.client.v3.get = jest.fn();
    const expectedProductId = 1;
    const expectedReviewId = 2;
    const props: GetProductReviewProps = {
      productId: expectedProductId,
      reviewId: expectedReviewId
    };

    // When
    await getProductReview(contextMock, props);

    // Then
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      `/catalog/products/${expectedProductId}/reviews/${expectedReviewId}`
    );
  });

  it('should throw an error when productId were not provided', async () => {
    contextMock.client.v3.get = jest.fn();
    const props = {
      productId: undefined,
      reviewId: 1
    };

    expect(getProductReview(contextMock, props)).rejects.toMatch('error');
  });

  it('should throw an error when reviewId were not provided', () => {
    contextMock.client.v3.get = jest.fn();
    const props = {
      productId: 1,
      reviewId: undefined
    };

    expect(getProductReview(contextMock, props)).rejects.toMatch('error');
  });

  it('should pass with valid props', async () => {
    // Given
    contextMock.client.v3.get = jest.fn();
    const expectedProductId = 1;
    const expectedReviewId = 2;
    const props: GetProductReviewProps = {
      productId: expectedProductId,
      reviewId: expectedReviewId
    };

    // When
    await getProductReview(contextMock, props);

    // Then
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveReturned();
  });
});
