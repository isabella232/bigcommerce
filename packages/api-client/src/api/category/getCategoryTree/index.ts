import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { CategoryTreeResponse, Endpoints } from '../../../types';

/**
 *
 * @param context BigcommerceIntegrationContext
 * @returns CategoryTree array with children categories
 */
export const getCategoryTree: Endpoints['getCategoryTree'] = async (
  context
) => {
  const { categoryTree } = BigCommerceEndpoints;
  const response = await context.client.v3.get<CategoryTreeResponse>(
    categoryTree()
  );
  return response;
};
