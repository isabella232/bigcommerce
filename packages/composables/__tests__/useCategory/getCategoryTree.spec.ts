import { CategoryTree } from '@vue-storefront/bigcommerce-api';
import categoryTreeMockData from '../../__mocks__/useCategory/categoryTreeMockData.json';
import {
  buildBreadcrumbs,
  getBreadcrumbs,
  getCategoryById,
  getCategoryBySlug
} from '../../../theme/composables/useCategoryData';

const contextMock = {
  $bigcommerce: {
    api: {
      getCategoryTree: jest.fn(() => Promise.resolve(categoryTreeMockData.data))
    }
  }
};

describe('[bigcommerce-composables] getCategoryTree', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('it should return a category tree from api', async () => {
    const i18n = {
      t: jest.fn((str) => str)
    };
    const localePath = jest.fn((str) => str);
    const categories: CategoryTree[] =
      await contextMock.$bigcommerce.api.getCategoryTree();
    expect(contextMock.$bigcommerce.api.getCategoryTree).toHaveBeenCalledTimes(
      1
    );

    const categoryBath = getCategoryById(39, categories);
    expect(categoryBath).toMatchInlineSnapshot(
      `
        Object {
          "children": Array [],
          "id": 39,
          "name": "Bath",
          "parent_id": 19,
          "url": "/garden/bath/",
        }
      `
    );

    const categoryGarden = getCategoryBySlug('/garden/', categories);
    expect(categoryGarden).toMatchInlineSnapshot(
      `
        Object {
          "children": Array [
            Object {
              "children": Array [],
              "id": 39,
              "name": "Bath",
              "parent_id": 19,
              "url": "/garden/bath/",
            },
          ],
          "id": 19,
          "name": "Garden",
          "parent_id": 0,
          "url": "/garden/",
        }
      `
    );

    const breadcrumbs = getBreadcrumbs(39, categories, localePath, i18n);
    expect(breadcrumbs).toMatchInlineSnapshot(`
      Array [
        Object {
          "link": "/",
          "text": "Home",
        },
        Object {
          "link": "/c/garden/",
          "text": "Garden",
        },
        Object {
          "link": "/c/garden/bath/",
          "text": "Bath",
        },
      ]
    `);

    const breadcrumbs2 = buildBreadcrumbs(39, [], categories, localePath, i18n);
    expect(breadcrumbs2).toMatchInlineSnapshot(`
      Array [
        Object {
          "link": "/c/garden/bath/",
          "text": "Bath",
        },
        Object {
          "link": "/c/garden/",
          "text": "Garden",
        },
      ]
    `);
  });
});
