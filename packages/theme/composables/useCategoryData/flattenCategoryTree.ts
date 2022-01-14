import { CategoryTree } from '@vue-storefront/bigcommerce-api';
/**
 *
 * @param items CategoryTree array
 * @param flatCategories flattened CategoryTree array
 * @returns
 */
export const flattenCategoryTree = (
  categories: Readonly<CategoryTree[]>,
  flatCategories: CategoryTree[] = []
): CategoryTree[] => {
  if (categories && categories.length) {
    for (const category of categories) {
      flatCategories.push(category);
      if (category.children)
        flattenCategoryTree(category.children, flatCategories);
    }
  }

  return flatCategories;
};
