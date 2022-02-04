import { stringifyUrl } from 'query-string';
import { Endpoints } from '../../../types';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';

export const getOrderProducts: Endpoints['getOrderProducts'] = async (
  context,
  params
) => {
  const { orderId, ...queryParams } = params;

  if (!orderId || typeof orderId !== 'number') {
    throw Error(
      `Order id with value: ${orderId} is not valid. Use number value.`
    );
  }

  return await context.client.v2.get(
    stringifyUrl({
      url: BigCommerceEndpoints.orderProducts(orderId),
      query: { ...queryParams }
    })
  );
};
