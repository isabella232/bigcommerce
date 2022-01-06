import { load } from '../../src/useUserShipping/actions';
import { mockedAddress } from '../../__mocks__/address.mock';
import { contextMock } from '../../__mocks__/context.mock';
import jwt from 'jsonwebtoken';

describe('[BigCommerce - composables] useUserShipping load', () => {
  const getCustomerAddressMock = jest.fn(() =>
    Promise.resolve({ data: [mockedAddress] })
  );

  beforeEach(() => {
    const customerId = 1;
    jest.clearAllMocks();
    const decode = jest.spyOn(jwt, 'decode');
    decode.mockImplementation(() => ({ customer: { id: customerId } }));
    contextMock.user = { user: { value: { id: customerId } } };
    contextMock.$bigcommerce.api.getCustomerAddress = getCustomerAddressMock;
    contextMock.$bigcommerce.config.app.$cookies.get = jest
      .fn()
      .mockReturnValue('jwt');
  });

  it('should get customer addresses', async () => {
    const address = await load(contextMock, { shipping: [mockedAddress] });

    expect(address).toEqual([mockedAddress]);

    expect(getCustomerAddressMock).toHaveBeenCalledTimes(1);
  });
});
