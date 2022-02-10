import { CategoryTree, Crumb } from '@vue-storefront/bigcommerce-api';
import { getCategoryById } from './getCategoryById';

/**
 * Build the breadcrumbs
 * @param categoryId
 * @param breadcrumbs
 * @param localePath
 * @param i18n
 * @returns Crumb[]
 */
export function buildBreadcrumbs(
  categoryId: number,
  breadcrumbs: Crumb[] = [],
  categories: CategoryTree[],
  localePath: (fn: string) => string,
  i18n: {
    t: (fn: string) => string
  }
): Crumb[] {
  if (categoryId) {
    const category: CategoryTree = getCategoryById(categoryId, categories);
    if (category) {
      const crumb: Crumb = { text: i18n.t(category.name), link: localePath(`/c${category.url}`) };
      breadcrumbs.push(crumb);
      if (category.parent_id) {
        return buildBreadcrumbs(category.parent_id, breadcrumbs, categories, localePath, i18n);
      }
    }
  }

  return breadcrumbs;
}
