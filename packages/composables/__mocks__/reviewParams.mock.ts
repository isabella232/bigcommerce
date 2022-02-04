import { ReviewStatus, CreateProductReviewProps } from '@vue-storefront/bigcommerce-api';

export const reviewParamsMock: CreateProductReviewProps = {
  productId: 22609026,
  title: 'Review title',
  text: 'Text of the review',
  status: ReviewStatus.approved,
  rating: 0,
  email: 'reviewcreator@email.com',
  name: 'Review creator'
};
