import { CategoryTree } from '../../types/useCategory';
/**
 *
 * @param categories CategoryTree array
 * @param flatCategories flattened CategoryTree array
 * @returns
 */
export const flattenCategoryTree = (
  categories: CategoryTree[],
  flatCategories: CategoryTree[] = []
): CategoryTree[] => {
  for (const category of categories) {
    flatCategories.push(category);
    flattenCategoryTree(category.children, flatCategories);
  }

  return flatCategories;
};
