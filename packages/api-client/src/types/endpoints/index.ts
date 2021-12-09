import {
  CreateCustomerParameters,
  CustomerData,
  LoginCustomerParameters,
  LoginCustomerResponse
} from '../customers';
import { GetProductsParameters, ProductsResponse } from '../product';
import { BigcommerceIntegrationContext } from '../context';
import {
  GetProductReviewProps,
  GetProductReviewCollectionProps,
  GetProductReviewCollectionQuery,
  ProductReviewResponse,
  ProductReviewCollectionResponse,
  CreateProductReviewProps
} from '../review';
import {
  CategoryParameters,
  CategoryResponse,
  CategoryTreeResponse
} from '../category';
import {
  AddLineItemsParameters,
  AddLineItemsResponse,
  CreateCartParameters,
  CreateCartResponse,
  DeleteCartParameters,
  GetCartParameters,
  GetCartResponse,
  RemoveLineItemParameters,
  RemoveLineItemResponse,
  UpdateCartParameters,
  UpdateCartResponse,
  UpdateLineItemParameters,
  UpdateLineItemResponse
} from '../cart';
import { CreateWishlistProps, CreateWishlistResponse } from '../wishlist';

/**
 * Definition of all API-client methods available in context.
 */
export interface Endpoints {
  /**
   * Returns a list of Products.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductsParameters} props An object containing the filters for products.
   */
  getProducts(
    context: BigcommerceIntegrationContext,
    params: GetProductsParameters
  ): Promise<ProductsResponse>;

  /**
   * Creates the new customer
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateCustomerParameters} params Parameters for `createCustomer` endpoint
   */
  createCustomer(
    context: BigcommerceIntegrationContext,
    params: CreateCustomerParameters
  ): Promise<CustomerData>;

  /**
   * Logs in a customer using the Customer Login API and saves her data in cookie in the format of a JWT token coming from the Current Customer API.
   * Return an object containing the status of authentication and an error message if applicable
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {LoginCustomerParameters} params Customer credentials for login (email, password).
   */
  loginCustomer(
    context: BigcommerceIntegrationContext,
    params: LoginCustomerParameters
  ): Promise<LoginCustomerResponse>;

  /**
   * Returns a single Product Review.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductReviewProps} props An object which contains necessary properties for getting a product review data.
   */
  getProductReview(
    context: BigcommerceIntegrationContext,
    props: GetProductReviewProps
  ): Promise<ProductReviewResponse>;

  /**
   * Returns a colection of Product Reviews.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductReviewCollectionProps} props An object which contains necessary properties for getting a product reviews collection.
   * @param {GetProductReviewCollectionQuery} query (Optional) An object which contains optional properties for getting a product reviews collection.
   */
  getProductReviewCollection(
    context: BigcommerceIntegrationContext,
    props: GetProductReviewCollectionProps,
    query?: GetProductReviewCollectionQuery
  ): Promise<ProductReviewCollectionResponse>;

  /**
   * Returns a colection of Category.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetCategoryParams} params An object which contains necessary parameters for getting a category.
   */
  getCategory(
    context: BigcommerceIntegrationContext,
    params: CategoryParameters
  ): Promise<CategoryResponse>;

  /**
   * Returns a colection of CategoryTree.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   */
  getCategoryTree(
    context: BigcommerceIntegrationContext
  ): Promise<CategoryTreeResponse>;

  /**
   * Creates a Product Review.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateProductReviewProps} props An object which contains necessary properties for creating a product review.
   */
  createProductReview(
    context: BigcommerceIntegrationContext,
    props: CreateProductReviewProps
  ): Promise<ProductReviewResponse>;

  /**
   * Adds new items to the cart
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {AddLineItemsParameters} params An object which contains necessary properties for adding new items to the cart.
   */
  addCartItems(
    context: BigcommerceIntegrationContext,
    params: AddLineItemsParameters
  ): Promise<AddLineItemsResponse>;

  /**
   * Removes an item from the cart
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {RemoveLineItemParameters} params An object which contains necessary properties for removing an item from the cart.
   */
  removeCartItem(
    context: BigcommerceIntegrationContext,
    params: RemoveLineItemParameters
  ): Promise<RemoveLineItemResponse>;

  /**
   * Updates the list price or the quantity of an item from the cart
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {UpdateLineItemParameters} params An object which contains necessary properties for updating a cart item.
   */
  updateCartItem(
    context: BigcommerceIntegrationContext,
    params: UpdateLineItemParameters
  ): Promise<UpdateLineItemResponse>;

  /**
   * Creates a new Cart.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateCartParameters} params An object which contains necessary properties for creating a new cart.
   */
  createCart(
    context: BigcommerceIntegrationContext,
    params: CreateCartParameters
  ): Promise<CreateCartResponse>;

  /**
   * Deletes a Cart.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {DeleteCartParameters} params An object which contains necessary properties for deleting a cart.
   */
  deleteCart(
    context: BigcommerceIntegrationContext,
    params: DeleteCartParameters
  ): Promise<null>;

  /**
   * Get a cart
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetCartParameters} params An object which contains necessary properties for getting a new cart.
   */
  getCart(
    context: BigcommerceIntegrationContext,
    params: GetCartParameters
  ): Promise<GetCartResponse>;

  /**
   * Update the customer_id of a cart
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {UpdateCartResponse} params An object which contains necessary properties for updating a cart.
   */
  updateCart(
    context: BigcommerceIntegrationContext,
    params: UpdateCartParameters
  ): Promise<UpdateCartResponse>;

  /**
   * Creates a wishlist and wishlist item. More than one item can be added.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateWishlistProps} params An object which contains necessary properties for creating a new wishlist.
   */
   createWishlist(
    context: BigcommerceIntegrationContext,
    params: CreateWishlistProps
  ): Promise<CreateWishlistResponse>;
}
