<template>
  <SfTabs :open-tab="1">
    <SfTab title="My orders">
      <div class="current-order" v-if="currentOrder">
        <SfButton
          class="sf-button--text all-orders"
          @click="currentOrder = null"
          >All Orders</SfButton
        >
        <div class="highlighted highlighted--total">
          <SfProperty
            name="Order ID"
            :value="orderHelpers.getId(currentOrder)"
            class="sf-property--full-width property"
          />
          <SfProperty
            name="Date"
            :value="orderHelpers.getDate(currentOrder)"
            class="sf-property--full-width property"
          />
          <SfProperty
            name="Status"
            :value="orderHelpers.getStatus(currentOrder)"
            class="sf-property--full-width property"
          />
          <SfProperty
            name="Total"
            :value="$n(orderHelpers.getPrice(currentOrder), 'currency')"
            class="sf-property--full-width property"
          />
        </div>
        <SfLoader :loading="isOrderProductsLoading">
          <SfTable class="products">
            <SfTableHeading>
              <SfTableHeader class="products__name">{{
                $t('Product')
              }}</SfTableHeader>
              <SfTableHeader>{{ $t('Quantity') }}</SfTableHeader>
              <SfTableHeader>{{ $t('Price') }}</SfTableHeader>
            </SfTableHeading>
            <SfTableRow v-for="(item, i) in orderProducts" :key="i">
              <SfTableData class="products__name">
                <nuxt-link
                  :to="
                    '/p/' +
                      orderHelpers.getItemSku(item) +
                      '/' +
                      orderHelpers.getItemSku(item)
                  "
                >
                  {{ orderHelpers.getItemName(item) }}
                </nuxt-link>
              </SfTableData>
              <SfTableData>{{ orderHelpers.getItemQty(item) }}</SfTableData>
              <SfTableData>{{
                $n(orderHelpers.getItemPrice(item), 'currency')
              }}</SfTableData>
            </SfTableRow>
          </SfTable>
        </SfLoader>
      </div>
      <div v-else>
        <p class="message">
          {{ $t('Details and status orders') }}
        </p>
        <div v-if="orders.length === 0" class="no-orders">
          <p class="no-orders__title">
            {{ $t('You currently have no orders') }}
          </p>
          <nuxt-link :to="localePath({ name: 'home' })">
            <SfButton class="no-orders__button">{{
              $t('Start shopping')
            }}</SfButton>
          </nuxt-link>
        </div>
        <div v-else>
          <SfTable class="orders">
            <SfTableHeading>
              <SfTableHeader
                v-for="tableHeader in tableHeaders"
                :key="tableHeader"
                >{{ $t(tableHeader) }}</SfTableHeader
              >
              <SfTableHeader class="orders__element--right" />
            </SfTableHeading>
            <SfTableRow
              v-for="order in orders"
              :key="orderHelpers.getId(order)"
            >
              <SfTableData v-e2e="'order-number'">{{
                orderHelpers.getId(order)
              }}</SfTableData>
              <SfTableData>{{ orderHelpers.getDate(order) }}</SfTableData>
              <SfTableData>{{
                $n(orderHelpers.getPrice(order), 'currency')
              }}</SfTableData>
              <SfTableData>
                <span :class="getStatusTextClass(order)">{{
                  orderHelpers.getStatus(order)
                }}</span>
              </SfTableData>
              <SfTableData class="orders__view orders__element--right">
                <SfButton
                  class="sf-button--text desktop-only"
                  @click="handleDetailsClick(order)"
                >
                  {{ $t('View details') }}
                </SfButton>
              </SfTableData>
            </SfTableRow>
          </SfTable>
          <p>Total orders - {{ totalOrders }}</p>
        </div>
      </div>
    </SfTab>
    <SfTab title="Returns">
      <p class="message">
        This feature is not implemented yet! Please take a look at
        <br />
        <SfLink
          class="message__link"
          link="https://github.com/vuestorefront/vue-storefront/issues"
          >https://github.com/vuestorefront/vue-storefront/issues</SfLink
        >
        for our Roadmap!
      </p>
    </SfTab>
  </SfTabs>
</template>

<script lang="ts">
import {
  SfTabs,
  SfTable,
  SfButton,
  SfProperty,
  SfLink,
  SfLoader
} from '@storefront-ui/vue';
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';
import {
  useUserOrder,
  useUserOrderProducts
} from '@vue-storefront/bigcommerce';
import { Order } from '@vue-storefront/bigcommerce-api';
import { AgnosticOrderStatus } from '@vue-storefront/core';
import { onSSR } from '@vue-storefront/core';
import useOrderData from '../../composables/useOrderData';

export default defineComponent({
  name: 'PersonalDetails',
  components: {
    SfTabs,
    SfTable,
    SfButton,
    SfProperty,
    SfLink,
    SfLoader
  },
  setup() {
    const { orders, search } = useUserOrder();
    const currentOrder = ref<Order>(null);
    const {
      products: orderProducts,
      load: loadOrderProducts,
      loading: isOrderProductsLoading
    } = useUserOrderProducts('orderProducts');
    const orderHelpers = useOrderData();

    onSSR(async () => {
      await search({});
    });

    const tableHeaders = ['Order ID', 'Payment date', 'Amount', 'Status'];

    const getStatusTextClass = (order) => {
      const status = orderHelpers.getStatus(order);
      switch (status) {
        case AgnosticOrderStatus.Open:
          return 'text-warning';
        case AgnosticOrderStatus.Complete:
          return 'text-success';
        default:
          return '';
      }
    };

    const handleDetailsClick = async (order: Order) => {
      currentOrder.value = order;

      await loadOrderProducts({
        orderId: order.id
      });
    };

    return {
      tableHeaders,
      orders: computed(() => orders.value?.results ?? []),
      totalOrders: computed(() => orderHelpers.getOrdersTotal(orders.value)),
      getStatusTextClass,
      orderHelpers,
      currentOrder,
      orderProducts,
      isOrderProductsLoading,
      handleDetailsClick
    };
  }
});
</script>

<style lang="scss" scoped>
.no-orders {
  &__title {
    margin: 0 0 var(--spacer-lg) 0;
    font: var(--font-weight--normal) var(--font-size--base) / 1.6
      var(--font-family--primary);
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: 17, 5rem;
    }
  }
}
.orders {
  @include for-desktop {
    &__element {
      &--right {
        --table-column-flex: 1;
        text-align: right;
      }
    }
  }
}
.all-orders {
  --button-padding: var(--spacer-base) 0;
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  font: var(--font-weight--light) var(--font-size--base) / 1.6
    var(--font-family--primary);
  &__link {
    color: var(--c-primary);
    font-weight: var(--font-weight--medium);
    font-family: var(--font-family--primary);
    font-size: var(--font-size--base);
    text-decoration: none;
    &:hover {
      color: var(--c-text);
    }
  }
}
.product {
  &__properties {
    margin: var(--spacer-xl) 0 0 0;
  }
  &__property,
  &__action {
    font-size: var(--font-size--sm);
  }
  &__action {
    color: var(--c-gray-variant);
    font-size: var(--font-size--sm);
    margin: 0 0 var(--spacer-sm) 0;
    &:last-child {
      margin: 0;
    }
  }
  &__qty {
    color: var(--c-text);
  }
}
.products {
  --table-column-flex: 1;
  &__name {
    margin-right: var(--spacer-sm);
    @include for-desktop {
      --table-column-flex: 2;
    }
  }
}
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--c-light);
  padding: var(--spacer-sm);
  --property-value-font-size: var(--font-size--base);
  --property-name-font-size: var(--font-size--base);
  &:last-child {
    margin-bottom: 0;
  }
  ::v-deep .sf-property__name {
    white-space: nowrap;
  }
  ::v-deep .sf-property__value {
    text-align: right;
  }
  &--total {
    margin-bottom: var(--spacer-sm);
  }
  @include for-desktop {
    padding: var(--spacer-xl);
    --property-name-font-size: var(--font-size--lg);
    --property-name-font-weight: var(--font-weight--medium);
    --property-value-font-size: var(--font-size--lg);
    --property-value-font-weight: var(--font-weight--semibold);
  }
}
.sf-loader__spinner {
  margin-top: 3rem;
}
</style>
