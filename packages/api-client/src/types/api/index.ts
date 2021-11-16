import { CreateCustomerParameters, CustomerData } from './customers';
import { GetProductsParameters, ProductsResponse } from './product';
import { BigcommerceIntegrationContext } from '../context';
import { Review, GetProductReviewProps } from '../index';

export * from './customers';
export * from './product';

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

  /*
   * Creates the new customer
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateCustomerParameters} params Parameters for `createCustomer` endpoint
   */
  createCustomer(
    context: BigcommerceIntegrationContext,
    params: CreateCustomerParameters
  ): Promise<CustomerData>;

  /**
   * Returns a single Product Review.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductReviewProps} props An object which contains necessary properties for getting a product review data.
   */
  getProductReview(
    context: BigcommerceIntegrationContext,
    props: GetProductReviewProps
  ): Promise<Review>;
}
