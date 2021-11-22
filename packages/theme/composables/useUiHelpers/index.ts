import dayjs from 'dayjs';
import { getCurrentInstance } from '@vue/composition-api';

const nonFilters = ['page', 'sort', 'term', 'itemsPerPage'];

const getInstance = () => {
  const vm = getCurrentInstance();
  return vm.$root as any;
};

const reduceFilters = (query) => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);

  return {
    ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]]
  };
};

const getFiltersDataFromUrl = (context, onlyFilters) => {
  const { query } = context.$router.history.current;

  return Object.keys(query)
    .filter((f) =>
      onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)
    )
    .reduce(reduceFilters(query), {});
};

const useUiHelpers = (): any => {
  const instance = getInstance();

  const getFacetsFromURL = () => {
    const { query, path } = instance.$router.history.current;
    const categorySlug = (/\/$/.test(path) ? path : `${path}/`)
      .replace(/\/\//g, '/')
      .replace(/^\/c/, '');
    return {
      categorySlug,
      page: parseInt(query.page, 10) || 1,
      sort: query.sort || 'latest',
      filters: getFiltersDataFromUrl(instance, true),
      itemsPerPage: parseInt(query.itemsPerPage, 10) || 24,
      term: query.term
    };
  };

  const getCatLink = (category): string => {
    return `/c${category?.url}`;
  };

  // eslint-disable-next-line
  const changeSorting = (sort) => {
    console.warn('[VSF] please implement useUiHelpers.changeSorting.');

    return 'latest';
  };

  // eslint-disable-next-line
  const changeFilters = (filters) => {
    console.warn('[VSF] please implement useUiHelpers.changeFilters.');
  };

  // eslint-disable-next-line
  const changeItemsPerPage = (itemsPerPage) => {
    console.warn('[VSF] please implement useUiHelpers.changeItemsPerPage.');
  };

  // eslint-disable-next-line
  const setTermForUrl = (term: string) => {
    console.warn('[VSF] please implement useUiHelpers.changeSearchTerm.');
  };

  // eslint-disable-next-line
  const isFacetColor = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetColor.');

    return false;
  };

  // eslint-disable-next-line
  const isFacetCheckbox = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetCheckbox.');

    return false;
  };

  const getSearchTermFromUrl = () => {
    console.warn('[VSF] please implement useUiHelpers.getSearchTermFromUrl.');
  };

  const formatDateString = (date: string, format = 'DD.MM.YYYY'): string => {
    return dayjs(date).format(format);
  };

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    setTermForUrl,
    isFacetColor,
    isFacetCheckbox,
    getSearchTermFromUrl,
    formatDateString
  };
};

export default useUiHelpers;
