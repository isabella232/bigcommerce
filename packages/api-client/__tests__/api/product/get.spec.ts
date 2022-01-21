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

    contextMock.client.v3.get = (url: string) => {
      const [path, query] = url.split('?');

      expect(path).toEqual(BigCommerceEndpoints.products);
      expect(queryString.parse(query).id).toEqual(params.id.toString());

      return expectedResponse;
    };

    const response = await getProducts(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('images should always be requested', async () => {
    contextMock.client.v3.get = (url: string) => {
      const [, query] = url.split('?');
      const params = queryString.parse(query);

      expect(params.include).toEqual('images');
    };

    await getProducts(contextMock, {});
  });

  it('should apply additional include params', async () => {
    const expectedParam = 'videos,images';

    contextMock.client.v3.get = (url: string) => {
      const [, query] = url.split('?');
      const params = queryString.parse(query);

      expect(params.include).toEqual(expectedParam);
    };

    await getProducts(contextMock, { include: 'videos' });
  });

  it('images should not be duplicated in the include param', async () => {
    const expectedParam = 'images,videos';

    contextMock.client.v3.get = (url: string) => {
      const [, query] = url.split('?');
      const params = queryString.parse(query);

      expect(params.include).toEqual(expectedParam);
    };

    await getProducts(contextMock, { include: expectedParam });
  });
});
