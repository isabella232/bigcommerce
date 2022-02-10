import { mockedProduct } from '../../__mocks__/product.mock';
import { productsSearch } from '../../src/useProduct/actions';
import { contextMock } from '../../__mocks__/context.mock';

describe('[bigcommerce-composables] useProduct search', () => {
  it('loads requested product', async () => {
    const getProductMock = jest.fn(() => Promise.resolve({ data: [mockedProduct] }));
    contextMock.$bigcommerce.api.getProducts = getProductMock;

    const response = await productsSearch(contextMock, { id: 77 });

    expect(getProductMock).toHaveBeenCalledTimes(1);
    expect(getProductMock).toBeCalledWith({ id: 77 });

    expect(response.data[0]).toEqual(mockedProduct);
  });
});
