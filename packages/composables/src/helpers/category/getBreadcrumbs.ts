import { CategoryTree, Crumb } from '../../types/useCategory';
import { buildBreadcrumbs } from './buildBreadcrumbs';
import { flattenCategoryTree } from './flattenCategoryTree';

/**
 * Build the breadcrumbs
 * @param categoryId
 * @param breadcrumbs
 * @returns Crumb[]
 */
export function getBreadcrumbs(categoryId: number, categories: CategoryTree[] = []) : Crumb[] {
  const flattenedCategories = flattenCategoryTree(categories);
  const breadcrumbs: Crumb[] = buildBreadcrumbs(
    categoryId,
    [],
    flattenedCategories
  );
  return [{ text: 'Home', link: '/' }, ...breadcrumbs.reverse()];
}
