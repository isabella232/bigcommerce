import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import {
  BigcommerceIntegrationContext,
  CategoryParameters,
  CategoryResponse
} from '../../../types';

/**
 *
 * @param context BigcommerceIntegrationContext
 * @param params optional { categoryId }
 * @returns array of categories or a single category object if categoryId is passed
 */
export async function getCategory(
  context: BigcommerceIntegrationContext,
  params?: CategoryParameters
): Promise<CategoryResponse> {
  const { category } = BigCommerceEndpoints;
  const categoryId = params?.categoryId;
  const response = await context.client.get<CategoryResponse>(
    category(categoryId)
  );
  return response;
}
