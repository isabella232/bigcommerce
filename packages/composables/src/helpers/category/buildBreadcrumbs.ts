import { Crumb } from '@vue-storefront/bigcommerce-api';
import { CategoryTree } from '../../types';
import { getCategoryById } from './getCategoryById';

/**
 * Build the breadcrumbs
 * @param categoryId
 * @param breadcrumbs
 * @returns Crumb[]
 */
export function buildBreadcrumbs(
  categoryId: number,
  breadcrumbs: Crumb[] = [],
  categories: CategoryTree[]
): Crumb[] {
  if (categoryId) {
    const category: CategoryTree = getCategoryById(categoryId, categories);
    if (category) {
      const crumb: Crumb = { text: category.name, link: `/c${category.url}` };
      breadcrumbs.push(crumb);
      if (category.parent_id) {
        return buildBreadcrumbs(category.parent_id, breadcrumbs, categories);
      }
    }
  }

  return breadcrumbs;
}
