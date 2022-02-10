import { contextMock } from '../../../__mocks__/context.mock';
import { reviewCollectionMock } from '../../../__mocks__/reviewCollection.mock';
import { searchReviews } from '../../../src/useReview/actions/search';
import { UseReviewSearchParams } from '../../../src/types';

describe('[BigCommerce - composables] useReview searchReviews', () => {
  it('should to return review collection', async () => {
    const getReviewCollectionMock = jest.fn(() =>
      Promise.resolve(reviewCollectionMock)
    );
    contextMock.$bigcommerce.api.getProductReviewCollection =
      getReviewCollectionMock;
    const expectedResponse = reviewCollectionMock;

    const res = await searchReviews(contextMock, { productId: 1 });

    expect(res).toBe(expectedResponse);
  });

  it('should call api with required params', async () => {
    const getReviewCollectionMock = jest.fn(() =>
      Promise.resolve(reviewCollectionMock)
    );
    contextMock.$bigcommerce.api.getProductReviewCollection =
      getReviewCollectionMock;
    const searchParams: UseReviewSearchParams = {
      productId: 1,
      query: undefined
    };
    const expectedProps = { productId: 1 };

    await searchReviews(contextMock, searchParams);

    expect(getReviewCollectionMock).toHaveBeenCalledWith(
      expectedProps,
      undefined
    );
  });

  it('should call api with all params', async () => {
    const getReviewCollectionMock = jest.fn(() =>
      Promise.resolve(reviewCollectionMock)
    );
    contextMock.$bigcommerce.api.getProductReviewCollection =
      getReviewCollectionMock;
    const searchParams: UseReviewSearchParams = {
      productId: 1,
      query: {
        limit: 10
      }
    };
    const expectedProps = { productId: 1 };
    const expectedQuery = { limit: 10 };

    await searchReviews(contextMock, searchParams);

    expect(getReviewCollectionMock).toHaveBeenCalledWith(
      expectedProps,
      expectedQuery
    );
  });

  it('should throw an error when product id is invalid', async () => {
    const getReviewCollectionMock = jest.fn();
    contextMock.$bigcommerce.api.getProductReviewCollection =
      getReviewCollectionMock;
    const searchParams: UseReviewSearchParams = {
      productId: undefined
    };

    try {
      await searchReviews(contextMock, searchParams);
    } catch (error) {
      expect(error.message).toBe(
        `ProductId with value: ${searchParams.productId} is not valid. Use number value.`
      );
    } finally {
      expect(getReviewCollectionMock).toHaveBeenCalledTimes(0);
    }
  });
});
