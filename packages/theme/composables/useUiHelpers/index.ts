import dayjs from 'dayjs';
import { getCurrentInstance } from '@vue/composition-api';

const nonFilters = ['page', 'sort', 'direction', 'term', 'itemsPerPage'];

export const getInstance = (): any => {
  const vm = getCurrentInstance();
  return vm.$root;
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useUiHelpers = () => {
  const instance = getInstance();

  const getFacetsFromURL = () => {
    const { query, path } = instance.$router.history.current;
    const categorySlug = (/\/$/.test(path) ? path : `${path}/`)
      .replace(/\/\//g, '/')
      .replace(/^\/c/, '');
    return {
      categorySlug,
      page: parseInt(query.page, 10) || 1,
      sort: query.sort,
      direction: query.direction,
      filters: getFiltersDataFromUrl(instance, true),
      itemsPerPage: parseInt(query.itemsperpage, 10) || 20,
      term: query.term
    };
  };

  const getCatLink = (category): string => {
    return `/c${category?.url}`;
  };

  const changeSorting = (sort: string) => {
    const sortOptions =
      instance.context.$config.theme?.productsSortOptions ?? [];
    const selectedOption = sortOptions.find(
      (option) => option.id === Number.parseInt(sort)
    );

    const { query } = instance.$router.history.current;
    instance.$router.push({
      query: {
        ...query,
        sort: selectedOption?.value.sort,
        direction: selectedOption?.value.direction
      }
    });
  };

  // eslint-disable-next-line
  const changeFilters = (filters) => {
    console.warn('[VSF] please implement useUiHelpers.changeFilters.');
  };

  const changeItemsPerPage = (itemsperpage) => {
    instance.$router.push({
      query: {
        ...getFiltersDataFromUrl(instance, false),
        itemsperpage,
        page: 1
      }
    });
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
