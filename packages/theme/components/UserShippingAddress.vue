<template>
  <div>
    <div>
      {{ addressData.getFirstName(address) }}
      {{ addressData.getLastName(address) }}
      {{ addressData.getPhone(address) }}
    </div>
    <div>
      <b>{{ addressData.getAddress1(address) }}</b>
      {{ addressData.getAddress2(address) }}
    </div>
    <div>
      {{ addressData.getCity(address) }}
      {{ addressData.getState(address) }}
      {{ addressData.getPostCode(address) }},
      {{ addressData.getCountry(address) }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import { useUserShippingData } from '~/composables/useUserShippingData';

export default defineComponent({
  name: 'UserShippingAddress',
  props: ['address'],
  setup() {
    const addressData = useUserShippingData();
    return {
      addressData
    };
  }
});
</script>
