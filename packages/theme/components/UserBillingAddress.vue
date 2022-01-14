<template>
  <span
    ><b
      >{{ address.apartment }} {{ address.streetName }}, {{ address.city }}
      {{ address.zipCode }}, {{ address.country }}
    </b>
    ({{ address.name }})</span
  >
</template>

<script>
export default {
  name: 'UserBillingAddress',
  props: ['address']
};
</script>
