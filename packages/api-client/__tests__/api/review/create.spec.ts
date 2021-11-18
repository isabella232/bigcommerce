import { CreateProductReviewProps } from '../../../src/types';
import { createProductReview } from '../../../src/api/review';
import { contextMock } from '../../../__mocks__/context.mock';
import { reviewResponseMock } from '../../../__mocks__/review/response.mock';

describe('[BigCommerce-api-client] get product reviews', () => {
  it('should validate the executed props for post client function', async () => {
    // Given
    const postMock = jest.fn();
    contextMock.client = {
      post: postMock
    };
    contextMock.client.post.mockImplementationOnce(() => Promise.resolve());
    const expectedProductId = 1;
    const props: CreateProductReviewProps = {
      title: 'New review',
      date_reviewed: '2018-05-07T19:37:13+00:00',
      productId: expectedProductId
    };

    // When
    await createProductReview(contextMock, props);

    // Then
    expect(postMock).toHaveBeenCalledWith(`/catalog/products/${expectedProductId}/reviews`, props);
  });

  it('should thorw an error when any of productId was not provided', async () => {
    const postMock = jest.fn();
    contextMock.client = {
      post: postMock
    };
    contextMock.client.post.mockImplementationOnce(() => Promise.resolve());
    const props: CreateProductReviewProps = {
      title: 'New review',
      date_reviewed: '2018-05-07T19:37:13+00:00',
      productId: undefined
    };

    try {
      await createProductReview(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `ProductId with value: ${props.productId} is not valid. Use number value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(postMock).toHaveBeenCalledTimes(0);
    }
  });

  it('should thorw an error when title was not provided', async () => {
    const postMock = jest.fn();
    contextMock.client = {
      post: postMock
    };
    contextMock.client.post.mockImplementationOnce(() => Promise.resolve());
    const props: CreateProductReviewProps = {
      title: undefined,
      date_reviewed: '2018-05-07T19:37:13+00:00',
      productId: 1
    };

    try {
      await createProductReview(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Title with value: ${props.title} is not valid. Use string value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(postMock).toHaveBeenCalledTimes(0);
    }
  });

  it('should thorw an error when date_reviewed was not provided', async () => {
    const postMock = jest.fn();
    contextMock.client = {
      post: postMock
    };
    contextMock.client.post.mockImplementationOnce(() => Promise.resolve());
    const props: CreateProductReviewProps = {
      title: 'New review',
      date_reviewed: undefined,
      productId: 1
    };

    try {
      await createProductReview(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Date reviewed with value: ${props.date_reviewed} is not valid. Must be a string in date-time format.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(postMock).toHaveBeenCalledTimes(0);
    }
  });

  it('should thorw an error when date_reviewed was not in date-time format', async () => {
    const postMock = jest.fn();
    contextMock.client = {
      post: postMock
    };
    contextMock.client.post.mockImplementationOnce(() => Promise.resolve());
    const props: CreateProductReviewProps = {
      title: 'New review',
      date_reviewed: '20180507T1937130000',
      productId: 1
    };

    try {
      await createProductReview(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Date reviewed with value: ${props.date_reviewed} is not valid. Must be a string in date-time format.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(postMock).toHaveBeenCalledTimes(0);
    }
  });

  it('should pass with all props', async () => {
    const postMock = jest.fn();
    contextMock.client = {
      post: postMock
    };
    contextMock.client.post.mockImplementationOnce(() => Promise.resolve(reviewResponseMock));
    const expectedProductId = 1;
    const props: CreateProductReviewProps = {
      title: 'New review',
      date_reviewed: '2018-05-07T19:37:13+00:00',
      productId: expectedProductId,
      email: 'reviewer@email.com',
      name: 'Reviewer',
      rating: 5,
      status: 'pending',
      text: 'Text of the new review'
    };

    await createProductReview(contextMock, props);

    expect(postMock).toHaveBeenCalledWith(`/catalog/products/${expectedProductId}/reviews`, props);
    expect(postMock).toHaveReturned();
  });
});
