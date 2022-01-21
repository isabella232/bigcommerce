import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { CategoryResponse, Endpoints } from '../../../types';

/**
 *
 * @param context BigcommerceIntegrationContext
 * @param params optional { categoryId }
 * @returns array of categories or a single category object if categoryId is passed
 */
export const getCategory: Endpoints['getCategory'] = async (
  context,
  params
) => {
  const { category } = BigCommerceEndpoints;
  const categoryId = params?.categoryId;
  const response = await context.client.v3.get<CategoryResponse>(
    category(categoryId)
  );
  return response;
};
