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
  cartItems: (cartId: string, itemId?: string): string =>
    `/carts/${cartId}/items${itemId ? `/${itemId}` : ''}`,
  cart: (cartId?: string): string => (cartId ? `/carts/${cartId}` : '/carts'),
  storefrontLoginWithToken: (token: string): string => `/login/token/${token}`,
  storefrontCurrentlyLoggedInCustomer: '/customer/current.jwt',
  formFieldValues: '/customers/form-field-values',
  addresses: '/customers/addresses',
  wishlistItems: (wishlistId: number, itemId?: number): string =>
    itemId
      ? `/wishlists/${wishlistId}/items/${itemId}`
      : `/wishlists/${wishlistId}/items`,
  wishlists: (wishlistId?: number): string =>
    wishlistId ? `/wishlists/${wishlistId}` : '/wishlists',
  orders: '/orders',
  orderProducts: (orderId: number): string => `/orders/${orderId}/products`,
  orderShipping: (orderId: number): string =>
    `/orders/${orderId}/shipping_addresses`
};

export default BigCommerceEndpoints;
