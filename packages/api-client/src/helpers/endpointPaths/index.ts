/**
 * Bigcommerce catalog endpoints
 */
const BigCommerceEndpoints = {
  customers: '/customers',
  products: '/catalog/products',
  review: (productId: number, reviewId: number): string =>
    `/catalog/products/${productId}/reviews/${reviewId}`,
  reviews: (productId: number): string =>
    `/catalog/products/${productId}/reviews`,
  validateCredentials: '/customers/validate-credentials',
  category: (categoryId?: number): string =>
    categoryId ? `/catalog/categories/${categoryId}` : '/catalog/categories',
  categoryTree: (): string => '/catalog/categories/tree',
  cartItems: (cartId: string): string => `/carts/${cartId}/items`,
  cart: (cartId?: string): string => (cartId ? `/carts/${cartId}` : '/carts'),
  storefrontLoginWithToken: (token: string): string => `/login/token/${token}`,
  storefrontCurrentlyLoggedInCustomer: '/customer/current.jwt'
};

export default BigCommerceEndpoints;
