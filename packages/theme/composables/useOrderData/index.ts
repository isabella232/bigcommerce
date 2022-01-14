import type { Order, OrderItem } from '@vue-storefront/bigcommerce-api';
import useUiHelpers from '../useUiHelpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useOrderData = () => {
  const { formatDateString } = useUiHelpers();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getDate(order: Order): string {
    // todo: will handle on another ticket
    // order && order.date_created ? formatDateString(order.date_created, 'DD.MM.YYYY HH:ss') : '';
    return formatDateString('10/12/2021 10:45', 'DD.MM.YYYY HH:ss');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getId(order: Order): string {
    return '1';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getStatus(order: Order): string {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getPrice(order: Order): number | null {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getItems(order: Order): OrderItem[] {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getItemSku(item: OrderItem): string {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getItemName(item: OrderItem): string {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getItemQty(item: OrderItem): number {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getItemPrice(item: OrderItem): number {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getFormattedPrice(price: number): string {
    return '';
  }

  // eslint-disable-next-line
  function getOrdersTotal(orders: any): number {
    return 1;
  }

  return {
    getDate,
    getId,
    getStatus,
    getPrice,
    getItems,
    getItemSku,
    getItemName,
    getItemQty,
    getItemPrice,
    getFormattedPrice,
    getOrdersTotal
  };
};

export default useOrderData;
