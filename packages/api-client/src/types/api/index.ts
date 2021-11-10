import { CreateCustomerParameters, CustomerData } from './customers';
import { BigcommerceIntegrationContext } from '../context';

export * from './customers';

/**
 * Definition of all API-client methods available in context.
 */
export interface Endpoints {
  // eslint-disable lines-around-comment
  /*
   * Creates the new customer
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateCustomerParameters} params Parameters for `createCustomer` endpoint
   */
  createCustomer(
    context: BigcommerceIntegrationContext,
    params: CreateCustomerParameters
  ): Promise<CustomerData>;
}
