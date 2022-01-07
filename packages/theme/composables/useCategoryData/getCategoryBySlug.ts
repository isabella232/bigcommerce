import { CategoryTree } from '@vue-storefront/bigcommerce-api';
import { flattenCategoryTree } from './flattenCategoryTree';

/**
 * get a category by slug from categories array
 * @param categoryId
 * @returns CategoryTree
 */
export function getCategoryBySlug(
  slug: string,
  categories: Readonly<CategoryTree[]>
): CategoryTree {
  const flattenedCategoryTree = flattenCategoryTree(categories);
  return flattenedCategoryTree.find((c) => c.url === slug);
}
