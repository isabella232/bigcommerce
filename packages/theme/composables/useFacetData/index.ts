import { useContext, useRoute } from '@nuxtjs/composition-api';
import { AgnosticSort } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useFacetData = () => {
  const { $config } = useContext();

  const getSortOptions = (): AgnosticSort => {
    const route = useRoute();
    const { query } = route.value;
    const sortParams = {
      sort: query.sort,
      direction: query.direction
    };

    const options: AgnosticSort['options'] = (
      $config.theme?.productsSortOptions ?? []
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
