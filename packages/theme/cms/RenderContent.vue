<template>
  <div v-editable="content || ''">
    <component
      v-for="(component, index) in components"
      v-editable="content[index] ? content[index] : ''"
      :is="component.componentName"
      :key="index"
      v-bind="component.props"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { extractComponents } from '@vue-storefront/storyblok';

interface RenderContent {
  componentName: string;
  props?: any;
}

export default defineComponent({
  name: 'RenderContent',
  props: {
    content: {
      type: Array
    }
  },
  computed: {
    components(): RenderContent[] {
      return extractComponents(this.content);
    }
  }
});
</script>
