import type { Order, OrderItem } from '@vue-storefront/bigcommerce-api';
import { OrderResults } from '@vue-storefront/bigcommerce';
import useUiHelpers from '../useUiHelpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOrderData = () => {
  const { formatDateString } = useUiHelpers();

  function getDate(order: Order): string {
    return order?.date_created ? formatDateString(order.date_created, 'DD.MM.YYYY HH:ss') : '';
  }

  function getId(order: Order): string {
    return order?.id?.toString() ?? '';
  }

  function getStatus(order: Order): string {
    return order?.status ?? '';
  }

  function getPrice(order: Order): number | null {
    return order?.total_inc_tax ? parseFloat(order?.total_inc_tax) : null;
  }

  function getItemSku(item: OrderItem): string {
    return item?.sku ?? '';
  }

  function getItemName(item: OrderItem): string {
    return item?.name ?? '';
  }

  function getItemQty(item: OrderItem): number {
    return item?.quantity ?? 0;
  }

  function getItemPrice(item: OrderItem): number {
    return item?.price_inc_tax ? parseFloat(item.price_inc_tax) : 0;
  }

  function getOrdersTotal(orders: OrderResults): number {
    return orders?.total ?? 0;
  }

  return {
    getDate,
    getId,
    getStatus,
    getPrice,
    getItemSku,
    getItemName,
    getItemQty,
    getItemPrice,
    getOrdersTotal
  };
};

export default useOrderData;
