import { expect } from '@jest/globals';
import { CategoryTree, Product } from '@vue-storefront/bigcommerce-api';
import { categoryTree } from '../../__mocks__/categoryTree.mock';
import { mockedProduct } from '../../__mocks__/product.mock';

import { buildSearchCategories } from '../../../composables/useCategoryData/buildSearchCategories';

describe('[bigcommerce-theme] buildSearchResultsCategoryNavigation', () => {
  it('should return an array of Category Navigation Items with a correct slug', async () => {
    const expectedResult = [
      { key: '/garden/', label: 'Garden', slug: '/garden/' },
      { key: '/garden/bath/', label: 'Bath', slug: '/garden/bath/' }
    ];

    expect(
      buildSearchCategories(
        [mockedProduct] as Product[],
        categoryTree as CategoryTree[]
      )
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...expectedResult[0]
        }),
        expect.objectContaining({
          ...expectedResult[1]
        })
      ])
    );
  });

  it('should return an empty array if no categories are passed', async () => {
    expect(
      buildSearchCategories([] as Product[], [] as CategoryTree[])
    ).toEqual([]);
  });
});
