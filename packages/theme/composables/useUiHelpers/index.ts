import dayjs from 'dayjs';
import {
  useContext,
  useRoute,
  useRouter
} from '@nuxtjs/composition-api';

const nonFilters = ['page', 'sort', 'direction', 'term', 'itemsPerPage'];

const reduceFilters = (query) => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);

  return {
    ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]]
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useUiHelpers = () => {
  const { $config } = useContext();
  const route = useRoute();
  const router = useRouter();

  const getFiltersDataFromUrl = (onlyFilters) => {
    const { query } = route.value;

    return Object.keys(query)
      .filter((f) =>
        onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)
      )
      .reduce(reduceFilters(query), {});
  };

  const getFacetsFromURL = () => {
    const { query, path } = route.value;
    const categorySlug = `/${path.split('/c/').pop()}${/\/$/.test(path) ? '' : '/'}`;
    return {
      categorySlug,
      page: parseInt(query.page as string, 10) || 1,
      sort: query.sort,
      direction: query.direction,
      filters: getFiltersDataFromUrl(true),
      itemsPerPage: parseInt(query.itemsperpage as string, 10) || 20,
      term: query.term
    };
  };

  const getCatLink = (category): string => {
    return `/c${category?.url}`;
  };

  const changeSorting = (sort: string) => {
    const sortOptions =
      $config.theme?.productsSortOptions ?? [];
    const selectedOption = sortOptions.find(
      (option) => option.id === Number.parseInt(sort)
    );

    const { query } = route.value;
    router.push({
      query: {
        ...query,
        sort: selectedOption?.value.sort,
        direction: selectedOption?.value.direction
      }
    });
  };

  const changeItemsPerPage = (itemsperpage) => {
    router.push({
      query: {
        ...getFiltersDataFromUrl(false),
        itemsperpage,
        page: 1
      }
    });
  };

  const formatDateString = (date: string, format = 'DD.MM.YYYY'): string => {
    return dayjs(date).format(format);
  };

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeItemsPerPage,
    formatDateString
  };
};

export default useUiHelpers;
