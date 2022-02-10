import { updateAddress } from '../../src/useUserShipping/actions';
import {
  mockedAddress,
  mockedAddressFormData
} from '../../__mocks__/address.mock';
import { contextMock } from '../../__mocks__/context.mock';

describe('[BigCommerce - composables] useUserShipping update', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update the address and return the parameter address if endpoint returned the updated array', async () => {
    const updateCustomerAddressMock = jest.fn(() =>
      Promise.resolve({
        ...mockedAddress,
        address1: mockedAddressFormData.address1
      })
    );
    contextMock.$bigcommerce.api.updateCustomerAddress = updateCustomerAddressMock;

    const response = await updateAddress(contextMock, {
      address: mockedAddress,
      shipping: [mockedAddress]
    });

    expect(updateCustomerAddressMock).toHaveBeenCalledTimes(1);
    expect(updateCustomerAddressMock).toHaveBeenCalledWith(mockedAddress);
    expect(response).toEqual([mockedAddress]);
  });

  it('should update the address and return the parameter address if endpoint returned empty array', async () => {
    const updateCustomerAddressMock = jest.fn(() =>
      Promise.resolve({
        ...mockedAddress,
        address1: []
      })
    );
    contextMock.$bigcommerce.api.updateCustomerAddress = updateCustomerAddressMock;

    const response = await updateAddress(contextMock, {
      address: mockedAddress,
      shipping: [mockedAddress]
    });

    expect(updateCustomerAddressMock).toHaveBeenCalledTimes(1);
    expect(updateCustomerAddressMock).toHaveBeenCalledWith(mockedAddress);
    expect(response).toEqual([mockedAddress]);
  });
});
