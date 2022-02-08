<template>
  <div class="sf-confirm-order">
    <SfTable class="sf-table--bordered sf-confirm-order__table">
      <SfTableHeading class="sf-confirm-order__table-row">
        <SfTableHeader
          v-for="tableHeader in tableHeaders"
          :key="tableHeader"
          class="sf-confirm-order__table-header"
          >{{ $t(tableHeader) }}
        </SfTableHeader>
      </SfTableHeading>
      <SfTableRow
        v-for="(product, index) in orderInfo.products"
        :key="index"
        class="sf-confirm-order__table-row"
        data-testid="product-table-row"
      >
        <SfTableData
          class="sf-confirm-order__table-data"
          data-testid="product-description-table-data"
        >
          <div class="sf-confirm-order__product-title">
            {{ orderData.getItemName(product) }}
          </div>
          <div class="sf-confirm-order__product-sku">
            {{ $t('SKU') }}: {{ orderData.getItemSku(product) }}
          </div>
          <SfProperty
            v-for="(attribute, key) in orderData.getItemAttributes(product)"
            :key="key"
            :name="key"
            :value="attribute"
            class="order-products__property"
          />
        </SfTableData>
        <SfTableData class="sf-confirm-order__table-data">{{
          orderData.getItemQty(product)
        }}</SfTableData>
        <SfTableData class="sf-confirm-order__table-data">
          <SfPrice
            :regular="$n(orderData.getItemPrice(product), 'currency')"
            class="sf-confirm-order__product-price"
          />
        </SfTableData>
      </SfTableRow>
    </SfTable>

    <div class="sf-confirm-order__totals">
      <SfProperty
        :name="$t(propertiesNames[0])"
        :value="$n(parseFloat(orderInfo.subtotal), 'currency')"
        class="sf-property--full-width sf-confirm-order__property sf-confirm-order__property-subtotal"
      />
      <SfProperty
        :name="$t(propertiesNames[1])"
        :value="$n(parseFloat(orderInfo.shipping.cost), 'currency')"
        class="sf-property--full-width sf-confirm-order__property"
      />
      <SfDivider class="sf-confirm-order__divider" />
      <SfProperty
        :name="$t(propertiesNames[2])"
        :value="$n(parseFloat(orderInfo.total), 'currency')"
        class="sf-property--full-width sf-property--large sf-confirm-order__property-total"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { OrderByCartResponse } from '@vue-storefront/bigcommerce-api';
import { defineComponent } from '@nuxtjs/composition-api';
import { SfTable, SfDivider, SfPrice, SfProperty } from '@storefront-ui/vue';
import useOrderData from '../composables/useOrderData';

export default defineComponent({
  name: 'OrderProducts',

  components: {
    SfTable,
    SfDivider,
    SfPrice,
    SfProperty
  },

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
      orderInfo: order,
      orderData,
      tableHeaders: ['Item Description', 'Quantity', 'Amount'],
      propertiesNames: ['Subtotal', 'Shipping', 'Total price']
    };
  }
});
</script>

<style lang="scss" scoped>
@import '~@storefront-ui/shared/styles/components/templates/SfConfirmOrder.scss';
.sf-confirm-order__table {
  @include for-mobile {
    width: calc(var(--table-width, 100%) - var(--spacer-sm) * 2);
  }
}

.sf-property--full-width,
.sf-confirm-order__divider {
  @include for-mobile {
    width: calc(100% - var(--spacer-sm) * 2);
  }
}

.order-products {
  &__property {
    .sf-property__name,
    .sf-property__value {
      font-family: var(--font-family--primary);
      color: var(--c-text-muted);
      font-weight: normal;
    }
  }
}
</style>
