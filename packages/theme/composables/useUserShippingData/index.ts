import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem,
  UserShippingAddressSearchCriteria
} from '@vue-storefront/bigcommerce-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUserShippingData = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getAddresses = (shipping: Address, criteria?: UserShippingAddressSearchCriteria): AddressItem[] => {
    return [];
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDefault = (shipping: Address): Address => {
    return {};
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTotal = (shipping: Address): number => {
    return 0;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPostCode = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getStreetName = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getStreetNumber = (address: AddressItem): string | number => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCity = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getFirstName = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getLastName = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCountry = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPhone = (address: AddressItem): string => {
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getId = (address: AddressItem): string => {
    return '';
  };

  return {
    getAddresses,
    getDefault,
    getTotal,
    getPostCode,
    getStreetName,
    getStreetNumber,
    getCity,
    getFirstName,
    getLastName,
    getCountry,
    getPhone,
    getId
  };
};
