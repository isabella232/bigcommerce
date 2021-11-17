import { mockedProduct } from '../../__mocks__/product.mock';
import { useProduct } from '../../src/useProduct';
import { contextMock } from '../../__mocks__/context.mock';

describe('[bigcommerce-composables] useProduct search', () => {
  it('loads requested product', async () => {
    const { productsSearch } = useProduct('test-product');

    const data = await productsSearch(contextMock, { id: 77 });

    expect(contextMock.$bigcommerce.api.getProducts).toHaveBeenCalledTimes(1);
    expect(contextMock.$bigcommerce.api.getProducts).toBeCalledWith({ id: 77 });

    expect(data[0]).toEqual(mockedProduct);
  });
});
