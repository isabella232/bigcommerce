import { CreateProductReviewProps } from '../../../src/types';
import { createProductReview } from '../../../src/api/review';
import { contextMock } from '../../../__mocks__/context.mock';
import { reviewResponseMock } from '../../../__mocks__/review/response.mock';

describe('[BigCommerce-api-client] get product reviews', () => {
  it('should validate the executed props for post client function', async () => {
    // Given
    contextMock.client.v3.post = jest.fn(() => Promise.resolve());
    const expectedProductId = 1;
    const props: CreateProductReviewProps = {
      title: 'New review',
      productId: expectedProductId
    };

    // When
    await createProductReview(contextMock, props);

    // Then
    const mockCallArgs = contextMock.client.v3.post.mock.calls[0];
    expect(mockCallArgs[0]).toBe(
      `/catalog/products/${expectedProductId}/reviews`
    );
    expect('date_reviewed' in mockCallArgs[1]).toBe(true);
    expect('title' in mockCallArgs[1]).toBe(true);
    expect('productId' in mockCallArgs[1]).toBe(false);
  });

  it('should throw an error when any of productId was not provided', async () => {
    contextMock.client.v3.post = jest.fn(() => Promise.resolve());
    const props: CreateProductReviewProps = {
      title: 'New review',
      productId: undefined
    };

    try {
      await createProductReview(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `ProductId with value: ${props.productId} is not valid. Use number value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.v3.post).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when title was not provided', async () => {
    contextMock.client.v3.post = jest.fn(() => Promise.resolve());
    const props: CreateProductReviewProps = {
      title: undefined,
      productId: 1
    };

    try {
      await createProductReview(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Title with value: ${props.title} is not valid. Use string value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.v3.post).toHaveBeenCalledTimes(0);
    }
  });

  it('should pass with all props', async () => {
    contextMock.client.v3.post = jest.fn(() =>
      Promise.resolve(reviewResponseMock)
    );
    const expectedProductId = 1;
    const props: CreateProductReviewProps = {
      title: 'New review',
      productId: expectedProductId,
      email: 'reviewer@email.com',
      name: 'Reviewer',
      rating: 5,
      status: 'pending',
      text: 'Text of the new review'
    };

    await createProductReview(contextMock, props);

    expect(contextMock.client.v3.post).toHaveReturned();
  });
});
