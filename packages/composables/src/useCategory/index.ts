import {
  useCategoryFactory
} from '@vue-storefront/core';
import type {
  CategoryTree,
  CategoryParameters as SearchParams
} from '@vue-storefront/bigcommerce-api';
import { params } from './params';

/**
 * Managing category lists (but not category products).
 */
export const useCategory = useCategoryFactory<CategoryTree, SearchParams>(params);
