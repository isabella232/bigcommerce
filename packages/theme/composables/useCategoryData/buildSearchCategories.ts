import {
  CategoryTree,
  SearchResultNavigationItem
} from '@vue-storefront/bigcommerce/src/types/useCategory';
import { getCategoryById } from '@vue-storefront/bigcommerce/src/helpers/category/getCategoryById';
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
