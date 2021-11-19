
import { CategoryTree } from '@vue-storefront/bigcommerce-api';
import { UseCategoryFactoryParams } from '@vue-storefront/core';
import type {
  Context
} from '../../types';

export const categorySearch: UseCategoryFactoryParams<CategoryTree, any>['categorySearch'] = async (
  context: Context
) => {
  const { data } = await context.$bigcommerce.api.getCategoryTree();
  return data;
};
