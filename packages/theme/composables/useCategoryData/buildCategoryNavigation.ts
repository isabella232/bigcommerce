import { SearchResultNavigationItem } from '@vue-storefront/bigcommerce';
import { CategoryTree } from '@vue-storefront/bigcommerce-api';

export function buildCategoryNavigation(
  categories: CategoryTree[]
): SearchResultNavigationItem[] {
  if (!categories) {
    return [];
  }

  return categories.map((item) => {
    return { key: item.url, label: item.name, slug: item.url };
  });
}
