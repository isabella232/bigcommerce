import { updateAddress } from '../../src/useUserShipping/actions';
import {
  mockedAddress,
  mockedAddressFormData
} from '../../__mocks__/address.mock';
import { contextMock } from '../../__mocks__/context.mock';
import jwt from 'jsonwebtoken';

describe('[BigCommerce - composables] useUserShipping update', () => {
  const updateCustomerAddressMock = jest.fn(() =>
    Promise.resolve({
      ...mockedAddress,
      address1: mockedAddressFormData.address1
    })
  );

  beforeEach(() => {
    const customerId = 1;
    jest.clearAllMocks();
    const decode = jest.spyOn(jwt, 'decode');
    decode.mockImplementation(() => ({ customer: { id: customerId } }));
    contextMock.$bigcommerce.api.updateCustomerAddress = updateCustomerAddressMock;
    contextMock.$bigcommerce.config.app.$cookies.get = jest
      .fn()
      .mockReturnValue('jwt');
  });

  it('should update the address1 on the address if customerId is provided as input', async () => {
    await updateAddress(contextMock, {
      address: mockedAddress,
      shipping: [mockedAddress]
    });

    expect(updateCustomerAddressMock).toHaveBeenCalledTimes(1);
  });
});
