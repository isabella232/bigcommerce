import { getCategory } from '../../../src/api/category/getCategory';
import { contextMock } from '../../../__mocks__/context.mock';

describe('[bigcommerce-api-client] getCategory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('get a single category', async () => {
    const parameters = { categoryId: 25 };
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve({ categoryId: 25 })
    );

    await getCategory(contextMock, parameters);
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(1);
    expect(contextMock.client.v3.get).toHaveBeenCalledWith(
      '/catalog/categories/25'
    );
  });

  it('should work with or without parameters', async () => {
    contextMock.client.v3.get = jest.fn(() => Promise.resolve([]));
    await getCategory(contextMock);
    await getCategory(contextMock, { categoryId: undefined });
    await getCategory(contextMock, { categoryId: 25 });
    expect(contextMock.client.v3.get).toHaveBeenCalledTimes(3);
  });
});
