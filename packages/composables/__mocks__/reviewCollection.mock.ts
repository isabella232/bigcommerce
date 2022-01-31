import { ProductReviewCollectionResponse, ReviewStatus } from '@vue-storefront/bigcommerce-api';

export const reviewCollectionMock: ProductReviewCollectionResponse = {
  data: [
    {
      title: 'Review title',
      text: 'Text of the review',
      status: ReviewStatus.approved,
      rating: 0,
      email: 'reviewcreator@email.com',
      name: 'Review creator',
      date_reviewed: '2011-12-31T13:40:42.971Z',
      id: 82495037,
      product_id: 22609026,
      date_created: '1985-01-17T07:37:20.439Z',
      date_modified: '2004-09-28T14:38:21.973Z'
    },
    {
      title: 'Review title 2',
      text: 'Text of the review 2',
      status: ReviewStatus.pending,
      rating: 0,
      email: 'reviewcreator@email.com',
      name: 'Review creator',
      date_reviewed: '2011-12-31T13:40:42.971Z',
      id: 82495038,
      product_id: 22609026,
      date_created: '1985-01-17T07:37:20.439Z',
      date_modified: '2004-09-28T14:38:21.973Z'
    }
  ],
  meta: {
    pagination: {
      count: 2,
      total: 2
    }
  }
};
