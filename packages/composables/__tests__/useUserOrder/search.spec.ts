import { searchOrders } from '../../src/useUserOrder/actions';
import { contextMock } from '../../__mocks__/context.mock';

describe('[bigcommerce-composables] useOrder search', () => {
  it('loads the orders for the current channel id', async () => {
    const channelId = 432;
    const getOrdersMock = jest.fn(() => Promise.resolve([]));

    contextMock.$bigcommerce.config.app.$config = {
      theme: {
        channelIds: [channelId]
      }
    };

    contextMock.$bigcommerce.api.getOrders = getOrdersMock;

    const response = await searchOrders(contextMock, {});

    expect(getOrdersMock).toHaveBeenCalledTimes(1);
    expect(getOrdersMock).toBeCalledWith({ channel_id: channelId });

    expect(response).toEqual({ results: [], total: 0 });
  });
});
