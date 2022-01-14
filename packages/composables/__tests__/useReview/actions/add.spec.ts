import { contextMock, reviewParamsMock } from '../../../__mocks__';
import { UseReviewAddParams } from '../../../src/types';
import { addReview } from '../../../src/useReview/actions/add';

describe('[BigCommerce - composables] useReview searchReviews', () => {
  let addReviewMock: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    addReviewMock = jest.fn();
    contextMock.$bigcommerce.api.createProductReview = addReviewMock;
  });

  it('should call api with required params', async () => {
    const expectedParams: UseReviewAddParams = {
      productId: reviewParamsMock.productId,
      title: reviewParamsMock.title
    };

    await addReview(contextMock, expectedParams);

    expect(addReviewMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should call api with all params', async () => {
    const expectedParams: UseReviewAddParams = reviewParamsMock;

    await addReview(contextMock, expectedParams);

    expect(addReviewMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error when product id is invalid', async () => {
    const addParams: UseReviewAddParams = {
      productId: undefined,
      title: reviewParamsMock.title
    };

    try {
      await addReview(contextMock, addParams);
    } catch (error) {
      const exprectedErrorMsg = `ProductId with value: ${addParams.productId} is not valid. Use number value.`;
      expect(error.message).toBe(exprectedErrorMsg);
    } finally {
      expect(addReviewMock).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when title is invalid', async () => {
    const addParams: UseReviewAddParams = {
      productId: reviewParamsMock.productId,
      title: undefined
    };

    try {
      await addReview(contextMock, addParams);
    } catch (error) {
      const exprectedErrorMsg = `Title with value: ${addParams.title} is not valid. Use string value.`;
      expect(error.message).toBe(exprectedErrorMsg);
    } finally {
      expect(addReviewMock).toHaveBeenCalledTimes(0);
    }
  });
});
