const BigCommerceEndpoints = {
  customers: '/customers',
  products: '/catalog/products',
  review: (productId: number, reviewId: number): string =>
    `/catalog/products/${productId}/reviews/${reviewId}`,
  reviews: (productId: number): string =>
    `/catalog/products/${productId}/reviews`,
  validateCredentials: '/customers/validate-credentials'
};

export default BigCommerceEndpoints;
