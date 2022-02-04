import { ProductReview } from '@vue-storefront/bigcommerce-api';
import useUiHelpers from '../useUiHelpers';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useReviewData = () => {
  const { formatDateString } = useUiHelpers();

  const getReviewTitle = (review: ProductReview) => {
    return review.name ? `${review.title} ~${review.name}` : review.title;
  };

  const getReviewDate = (review: ProductReview) => {
    return formatDateString(review.date_reviewed, 'DD.MM.YYYY HH:mm');
  };

  return {
    getReviewTitle,
    getReviewDate
  };
};

export default useReviewData;
