<template>
  <div class="order-summary">
    <SfOrderReview :order="orderInfo" :characteristics="[]" buttonText="">
      <template #heading>
        <span />
      </template>
      <template #promo>
        <span />
      </template>
    </SfOrderReview>

    <OrderProducts :order="order" />
  </div>
</template>

<script lang="ts">
import { OrderByCartResponse } from '@vue-storefront/bigcommerce-api';
import { defineComponent } from '@nuxtjs/composition-api';
import { SfConfirmOrder, SfOrderReview } from '@storefront-ui/vue';
import OrderProducts from './OrderProducts.vue';
import { useOrderData } from '../composables/useOrderData';

export default defineComponent({
  name: 'OrderSummary',

  props: {
    order: {
      type: Object as () => OrderByCartResponse,
      required: true
    }
  },

  setup(props) {
    const orderData = useOrderData();

    const order = orderData.mapOrderSummary(props.order);

    return {
      orderInfo: order
    };
  },

  components: {
    OrderProducts,
    SfConfirmOrder,
    SfOrderReview
  }
});
</script>

<style lang="scss" scoped>
.order-summary {
  width: 100%;

  @include for-mobile {
    margin: var(--spacer-sm);
  }
}
</style>
