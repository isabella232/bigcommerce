import { SearchResultNavigationItem } from '@vue-storefront/bigcommerce';
import { CategoryTree, Product } from '@vue-storefront/bigcommerce-api';
import { buildCategoryNavigation } from './buildCategoryNavigation';
import { getCategoryById } from './getCategoryById';

export function buildSearchCategories(
  products: Product[],
  categoryTree: CategoryTree[]
): SearchResultNavigationItem[] {
  if (products && categoryTree) {
    const productCategoryIds = products.map((product) => product.categories);
    const categoryIdsFlat = productCategoryIds.flat();
    const uniqueCategoryIdsFlat: number[] = [...new Set(categoryIdsFlat)];
    const categories = uniqueCategoryIdsFlat.map((item) =>
      getCategoryById(item, categoryTree)
    );

    const categoryNavigationItems = buildCategoryNavigation(categories);

    return categoryNavigationItems;
  }
}
