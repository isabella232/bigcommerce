import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import {
  BigcommerceIntegrationContext,
  CategoryTreeResponse
} from '../../../types';

/**
 *
 * @param context BigcommerceIntegrationContext
 * @returns CategoryTree array with children categories
 */
export async function getCategoryTree(
  context: BigcommerceIntegrationContext
): Promise<CategoryTreeResponse> {
  const { categoryTree } = BigCommerceEndpoints;
  const response = await context.client.get<CategoryTreeResponse>(
    categoryTree()
  );
  return response;
}
