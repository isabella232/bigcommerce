import { getCategoryTree } from '../../../src/api/category';
import { contextMock } from '../../../__mocks__/context.mock';
import categoryTreeMockData from '../../../__mocks__/category/categoryTreeMockData.json';

describe('[bigcommerce-api-client] getCategoryTree', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('get category tree', async () => {
    contextMock.client.get = jest.fn(() =>
      Promise.resolve(categoryTreeMockData)
    );
    const response = await getCategoryTree(contextMock);
    expect(contextMock.client.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.get).toHaveBeenCalledWith(
      '/catalog/categories/tree'
    );

    expect(response.data).toMatchInlineSnapshot(`
      Array [
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
        },
      ]
    `
    );
  });
});
