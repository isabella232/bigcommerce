import { expect } from '@jest/globals';
import { themeConfigMock } from '../../__mocks__/themeConfig.mock';
import { useFacetData } from '../../../composables/useFacetData';

jest.mock('@nuxtjs/composition-api', () => ({
  useContext: () => ({
    $config: {
      theme: themeConfigMock
    }
  }),
  useRoute: () => ({
    value: {
      query: {
        sort: 'id',
        direction: 'desc'
      }
    }
  })
}));

describe('[bigcommerce-theme] useFacetData', () => {
  const facetData = useFacetData();

  it('getSortOptions should return an object of available options array and the id of the selected option', async () => {
    const expected = {
      options: [
        {
          id: 1,
          metadata: { direction: 'desc', sort: 'id' },
          type: 'sort',
          value: 'Latest'
        },
        { id: 2, metadata: { sort: 'id' }, type: 'sort', value: 'Oldest' },
        {
          id: 3,
          metadata: { sort: 'name' },
          type: 'sort',
          value: 'Name: A to Z'
        },
        {
          id: 4,
          metadata: { direction: 'desc', sort: 'name' },
          type: 'sort',
          value: 'Name: Z to A'
        },
        {
          id: 5,
          metadata: { direction: 'desc', sort: 'price' },
          type: 'sort',
          value: 'Price from high to low'
        },
        {
          id: 6,
          metadata: { sort: 'price' },
          type: 'sort',
          value: 'Price from low to high'
        }
      ],
      selected: '1'
    };

    expect(facetData.getSortOptions()).toEqual(expected);
  });
});
