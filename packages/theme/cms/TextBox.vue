<template>
  <div class="text-box" v-html="$md.render(description)"></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'TextBox',
  props: {
    description: {
      type: String
    }
  }
});
</script>

<style lang="scss" scoped>
.text-box {
  margin: var(--spacer-base) 0;
}
</style>
