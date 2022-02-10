import { CategoryTree, Crumb } from '@vue-storefront/bigcommerce-api';
import { buildBreadcrumbs } from './buildBreadcrumbs';
import { flattenCategoryTree } from './flattenCategoryTree';

/**
 * Build the breadcrumbs
 * @param categoryId
 * @param breadcrumbs
 * @param localePath
 * @param i18n
 * @returns Crumb[]
 */
export function getBreadcrumbs(
  categoryId: number,
  categories: Readonly<CategoryTree[]> = [],
  localePath: (fn: string) => string,
  i18n: {
    t: (fn: string) => string
  }
): Crumb[] {
  const flattenedCategories = flattenCategoryTree(categories);
  const breadcrumbs: Crumb[] = buildBreadcrumbs(
    categoryId,
    [],
    flattenedCategories,
    localePath,
    i18n
  );
  return [{ text: i18n.t('Home'), link: localePath('/') }, ...breadcrumbs.reverse()];
}
