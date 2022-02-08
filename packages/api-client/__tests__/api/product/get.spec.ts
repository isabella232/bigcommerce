import queryString from 'query-string';
import { getProducts } from '../../../src/api/product';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';

describe('[bigcommerce-api-client] getProducts', () => {
  it('fetches product by id', async () => {
    const params = {
      id: 1
    };

    const expectedResponse = {
      data: [
        {
          name: 'Test product',
          ...params
        }
      ]
    };
    contextMock.client.v3.get = jest.fn(() =>
      Promise.resolve(expectedResponse)
    );

    const response = await getProducts(contextMock, params);

    expect(response).toBe(expectedResponse);
    expect(contextMock.client.v3.get).toBeCalledTimes(1);
    expect(contextMock.client.v3.get).toBeCalledWith(
      `${BigCommerceEndpoints.products}?${queryString.stringify(params)}`
    );
  });

  it('images should always be requested', async () => {
    contextMock.client.v3.get = jest.fn();

    await getProducts(contextMock, {});

    expect(contextMock.client.v3.get).toBeCalledTimes(1);
    expect(contextMock.client.v3.get).toBeCalledWith(
      `${BigCommerceEndpoints.products}?include=images&is_visible=true`
    );
  });

  it('should apply additional include params', async () => {
    contextMock.client.v3.get = jest.fn();

    await getProducts(contextMock, { include: 'videos' });

    expect(contextMock.client.v3.get).toBeCalledTimes(1);
    expect(contextMock.client.v3.get).toBeCalledWith(
      `${BigCommerceEndpoints.products}?include=videos%2Cimages&is_visible=true`
    );
  });

  it('images should not be duplicated in the include param', async () => {
    const expectedParam = 'images,videos';
    contextMock.client.v3.get = jest.fn();

    await getProducts(contextMock, { include: expectedParam });

    expect(contextMock.client.v3.get).toBeCalledTimes(1);
    expect(contextMock.client.v3.get).toBeCalledWith(
      `${BigCommerceEndpoints.products}?include=images%2Cvideos&is_visible=true`
    );
  });
});
