import type { Order, OrderByCartResponse, OrderItem } from '@vue-storefront/bigcommerce-api';
import { OrderResults } from '@vue-storefront/bigcommerce';
import useUiHelpers from '../useUiHelpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOrderData = () => {
  const { formatDateString } = useUiHelpers();

  function getDate(order: Order): string {
    return order?.date_created ? formatDateString(order.date_created, 'DD.MM.YYYY HH:mm') : '';
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

  function getItemAttributes(item: OrderItem) {
    return (
      item?.product_options?.reduce((acc, attribute) => {
        acc[attribute.display_name] = attribute.display_value;

        return acc;
      }, {} as Record<string, string>) ?? {}
    );
  }

  function getOrdersTotal(orders: OrderResults): number {
    return orders?.total ?? 0;
  }

  function mapOrderSummary(order: OrderByCartResponse) {
    const shippingAddress = order.shipping_addresses?.length ? order.shipping_addresses[0] : undefined;

    return {
      firstName: order.billing_address?.first_name,
      lastName: order.billing_address?.last_name,
      email: order.billing_address?.email,
      subtotal: order.subtotal_inc_tax,
      total: order.total_inc_tax,
      shipping: {
        streetName: shippingAddress?.street_1,
        city: shippingAddress?.city,
        zipCode: shippingAddress?.zip,
        country: shippingAddress?.country,
        phoneNumber: shippingAddress?.phone,
        shippingMethod: {
          value: shippingAddress?.shipping_method
        },
        cost: order.shipping_cost_inc_tax

      },
      payment: {
        streetName: order.billing_address?.street_1,
        city: order.billing_address?.city,
        zipCode: order.billing_address?.zip,
        country: order.billing_address?.country,
        phoneNumber: order.billing_address?.phone,
        paymentMethod: order.payment_method,
        shippingMethod: shippingAddress?.shipping_method
      },
      products: order.products
    };
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
    getItemAttributes,
    getOrdersTotal,
    mapOrderSummary
  };
};

export default useOrderData;
