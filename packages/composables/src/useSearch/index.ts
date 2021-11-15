import {
  Context,
  useSearchFactory,
  AgnosticFacetSearchParams
} from '@vue-storefront/core';
import type {
  UseSearchParams as SearchParams
} from '../types';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params) => {
    console.log('Mocked: useSearch.search');
    return {};
  }
};

export const useSearch = useSearchFactory<SearchParams, AgnosticFacetSearchParams>(factoryParams);
