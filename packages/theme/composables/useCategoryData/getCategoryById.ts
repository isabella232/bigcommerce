import { CategoryTree } from '@vue-storefront/bigcommerce-api';
import { flattenCategoryTree } from './flattenCategoryTree';

/**
 * get category by id from categories array
 * @param categoryId
 * @returns CategoryTree
 */
export function getCategoryById(
  categoryId: number,
  categories: CategoryTree[]
): CategoryTree {
  const flattenedCategoryTree = flattenCategoryTree(categories);
  return flattenedCategoryTree.find((c) => c.id === categoryId);
}
