import {
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import type { CategoryTree } from '@vue-storefront/bigcommerce-api';
import { categorySearch } from './actions';

export const params: UseCategoryFactoryParams<CategoryTree, any> = {
  categorySearch
};
