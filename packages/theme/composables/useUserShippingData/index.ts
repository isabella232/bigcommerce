import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem,
  UserShippingAddressSearchCriteria
} from '@vue-storefront/bigcommerce-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUserShippingData = () => {
  const getAddresses = (addresses: Address, criteria?: UserShippingAddressSearchCriteria): Address => {
    if (!criteria || !Object.keys(criteria).length) {
      return addresses;
    }

    const entries = Object.entries(criteria);

    return addresses.filter(address => entries.every(([key, value]) => address[key] === value));
  };

  const getDefault = (shipping: Address): AddressItem => {
    return shipping?.length ? shipping[0] : null;
  };

  const getPostCode = (address: AddressItem): string => {
    return address?.postal_code;
  };

  const getAddress1 = (address: AddressItem): string => {
    return address?.address1;
  };

  const getAddress2 = (address: AddressItem): string | number => {
    return address?.address2;
  };

  const getCity = (address: AddressItem): string => {
    return address?.city;
  };

  const getFirstName = (address: AddressItem): string => {
    return address?.first_name;
  };

  const getLastName = (address: AddressItem): string => {
    return address?.last_name;
  };

  const getCountry = (address: AddressItem): string => {
    return address?.country;
  };

  const getState = (address: AddressItem): string => {
    return address?.state_or_province;
  };

  const getPhone = (address: AddressItem): string => {
    return address?.phone;
  };

  const getId = (address: AddressItem): number => {
    return address?.id;
  };

  return {
    getAddresses,
    getDefault,
    getPostCode,
    getAddress1,
    getAddress2,
    getCity,
    getFirstName,
    getLastName,
    getCountry,
    getPhone,
    getState,
    getId
  };
};
