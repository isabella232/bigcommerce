<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="button_text"
    :link="button_link"
    :image="image ? image.url : ''"
    :background="background"
  >
    <template #call-to-action>
      <SfButton class="desktop-only" v-if="button_link">
        <nuxt-link
          :to="{ path: button_link }"
          class="text-light"
          style="pointer-events: auto"
        >
          {{ button_text }}
        </nuxt-link>
      </SfButton>
    </template>
  </SfBanner>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { SfBanner, SfButton } from '@storefront-ui/vue';

export default defineComponent({
  name: 'Banner',
  components: {
    SfBanner,
    SfButton
  },
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    description: {
      type: String
    },
    button_text: {
      type: String
    },
    button_link: {
      type: String
    },
    image: {
      type: Object
    },
    background: {
      type: String
    }
  }
});
</script>
