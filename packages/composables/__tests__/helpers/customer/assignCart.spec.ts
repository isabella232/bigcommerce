import { assignCart } from '../../../src/helpers/customer';
import { mockedCart } from '../../../__mocks__/cart.mock';
import { contextMock } from '../../../__mocks__/context.mock';
import { mockedUser } from '../../../__mocks__/user.mock';

describe('[BigCommerce - composables] assignCart helper', () => {
  it('should update the cart and the customer', async () => {
    const updateCustomerFormFieldsMock = jest.fn(() =>
      Promise.resolve({ data: mockedUser.form_fields })
    );
    const updateCartMock = jest.fn(() => Promise.resolve({ data: mockedCart }));
    const setCartMock = jest.fn();

    (contextMock as any).cart = {
      cart: {
        value: mockedCart
      },
      setCart: setCartMock
    };

    contextMock.$bigcommerce.api.updateCustomerFormFields = updateCustomerFormFieldsMock;
    contextMock.$bigcommerce.api.updateCart = updateCartMock;

    const formFields = await assignCart(contextMock);

    expect(updateCustomerFormFieldsMock).toHaveBeenCalledTimes(1);
    expect(updateCartMock).toBeCalledTimes(1);
    expect(setCartMock).toBeCalledTimes(1);
    expect(formFields).toEqual(mockedUser.form_fields);
  });
});
