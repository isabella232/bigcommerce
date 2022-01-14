import { AgnosticSort } from '@vue-storefront/core';
import { getInstance } from '../useUiHelpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useFacetData = () => {
  const instance = getInstance();

  const getSortOptions = (/* params: FacetSearchResult<Facet> */): AgnosticSort => {
    const { query } = instance.$router.history.current;
    const sortParams = {
      sort: query.sort,
      direction: query.direction
    };

    const options: AgnosticSort['options'] = (
      instance.context.$config.theme?.productsSortOptions ?? []
    ).map((option) => ({
      type: 'sort',
      id: option.id,
      value: option.label,
      metadata: option.value
    }));

    const selected = options.find(
      (option) =>
        option.metadata.sort === sortParams.sort &&
        option.metadata.direction === sortParams.direction
    );

    return {
      options,
      selected: selected?.id?.toString() ?? ''
    };
  };

  return { getSortOptions };
};
