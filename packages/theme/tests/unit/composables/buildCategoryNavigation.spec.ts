import { expect } from '@jest/globals';
import { CategoryTree } from '@vue-storefront/bigcommerce-api';
import { categoryTree } from '../../__mocks__/categoryTree.mock';

import { buildCategoryNavigation } from '../../../composables/useCategoryData/buildCategoryNavigation';
describe('[bigcommerce-theme] buildSearchResultsCategoryNavigation', () => {
  it('buildSearchResultsCategoryNavigation should map category tree data to return an object used in rendering a category link ', async () => {
    expect(buildCategoryNavigation(categoryTree as CategoryTree[])).toEqual([
      { label: 'Garden', slug: '/garden/', key: '/garden/' }
    ]);
  });

  it('buildSearchResultsCategoryNavigation should return an empty array if no categories are passed', async () => {
    expect(buildCategoryNavigation([] as CategoryTree[])).toEqual([]);
  });
});
