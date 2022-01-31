import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { Endpoints } from '../../../types';

export const getProducts: Endpoints['getProducts'] = async (
  context,
  params
) => {
  if (params.include && !params.include.includes('images')) {
    params.include = params.include.concat(',images');
  } else if (!params.include) {
    params.include = 'images';
  }

  params.is_visible = params.is_visible ?? true;

  return await context.client.v3.get(
    queryString.stringifyUrl(
      {
        url: BigCommerceEndpoints.products,
        query: { ...params }
      },
      {
        arrayFormat: 'comma'
      }
    )
  );
};

export default getProducts;
