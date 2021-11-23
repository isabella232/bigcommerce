<template>
  <div class="add_review">
      <div v-if="isThanksVisible">
        Thanks for adding review!
      </div>

      <SfButton
        v-if="!isFormVisible"
        class="sf-button--text"
        @click="showForm"
      >
        Add review
      </SfButton>

      <div v-if="isFormVisible" class="add_review--form">
          <form @submit="submit">
              <SfInput
                v-model="title"
                class="form__element"
                name="title"
                label="Review title"
                :required="true"
              />
              <SfRating
                class="form__element"
                :max="5"
                :score="rating"
                @click="submit"
              />
              <SfTextarea
                  v-model="message"
                  class="form__element"
                  name="message"
                  placeholder="type review message"
                  cols="50"
                  rows="5"
                  :required="true"
              >
              </SfTextarea>
              <SfButton>Submit</SfButton>
          </form>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useReview } from '@vue-storefront/bigcommerce';
import { SfButton, SfInput, SfTextarea, SfRating } from '@storefront-ui/vue';

export default defineComponent({
  name: 'AddReviewForm',

  props: {
    productId: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    const { add } = useReview('productReviews');
    const isFormVisible = ref(false);
    const isThanksVisible = ref(false);
    const title = ref('');
    const rating = ref(5);
    const message = ref('');

    const showForm = () => {
      isThanksVisible.value = false;
      isFormVisible.value = true;
    };

    // eslint-disable-next-line no-undef
    const submit = (e: Event) => {
      e.preventDefault();
      add({
        productId: props.productId,
        title: title.value,
        text: message.value,
        rating: rating.value
      });
      title.value = '';
      message.value = '';
      rating.value = 5;
      isFormVisible.value = false;
      isThanksVisible.value = true;
    };

    return {
      isFormVisible,
      isThanksVisible,
      title,
      rating,
      message,
      showForm,
      submit
    };
  },

  components: {
    SfButton,
    SfInput,
    SfTextarea,
    SfRating
  }
});
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.form {
  padding: var(--spacer-sm) 0;
  &__group {
    display: flex;
    align-items: flex-start;
  }
  &__action-button {
    &:first-child {
      margin: var(--spacer-sm) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-sm) 0 var(--spacer-sm) var(--spacer-base);
    }
  }
  &__button {
    --button-width: 100%;
  }
  .sf-rating {
      &__icon {
        --icon-size: 5rem;
      }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 var(--spacer-2xl) 0 0;
    &:last-of-type {
      margin: 0 calc(var(--spacer-2xl) - var(--spacer-sm)) 0 0;
    }
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
      &--range {
        margin: var(--spacer-xl) var(--spacer-base) var(--spacer-2xl);
      }
    }
    &__action {
      flex: 0 0 100%;
      display: flex;
    }
    &__button {
      --button-width: auto;
    }
  }
}
</style>
