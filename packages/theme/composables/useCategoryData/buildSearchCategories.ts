import {
  CategoryTree,
  SearchResultNavigationItem,
  getCategoryById
} from '@vue-storefront/bigcommerce';
import { buildCategoryNavigation } from './buildCategoryNavigation';
import { Product } from '@vue-storefront/bigcommerce-api';

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
