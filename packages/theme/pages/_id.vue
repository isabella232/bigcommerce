<template>
  <SfLoader class="cms__loader" :loading="loading">
    <div class="cms__content" v-if="content">
      <render-content :content="content" />
    </div>
  </SfLoader>
</template>

<script>
import { useContent } from '@vue-storefront/storyblok';
import RenderContent from '~/cms/RenderContent.vue';
import {
  computed,
  defineComponent,
  useRoute,
  useContext,
  onMounted,
  useFetch
} from '@nuxtjs/composition-api';
import { SfLoader } from '@storefront-ui/vue';

export default defineComponent({
  components: {
    RenderContent,
    SfLoader
  },
  setup() {
    const { error: nuxtError } = useContext();
    const route = useRoute();
    const slug = computed(() => route.value.params.id);
    const { search, content: page, loading, error } = useContent('unique-id');

    useFetch(async () => {
      await search({ url: slug.value });
    });

    onMounted(() => {
      if (!('content' in page.value)) {
        return nuxtError({ statusCode: 404 });
      }

      if (error.value.search) {
        return nuxtError({ statusCode: 500 });
      }
    });

    return {
      content: computed(() => page.value.content),
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
.cms {
  &__loader {
    margin: var(--spacer-base) auto;
    min-height: var(--spacer-2xl);
  }
}
</style>
