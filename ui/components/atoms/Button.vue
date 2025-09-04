<template>
  <button
    class="button"
    type="button"
    @click="handleClick"
    :aria-label="computedAriaLabel"
  >
    <div class="button__inner">
      <div class="cta">
        <slot name="icon">
          <span v-if="props.icon" aria-hidden="true">{{ props.icon }}</span>
        </slot>
        <slot name="label">{{ props.label }}</slot>
        <slot />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonType = {
  label?: string;
  icon?: string;
};

const props = defineProps<ButtonType>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
  emit("click", event);
}

const computedAriaLabel = computed(() => {
  return props.label || props.icon || "Button";
});
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  background-image: linear-gradient(0deg, #fff, #e9e9e9);
  padding: 0.5rem;
  border-radius: 1.25rem;
  outline: none;
  border: none;

  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #007aff;
    outline-offset: 2px;
  }

  &__inner {
    background-image: linear-gradient(0deg, #e9e9e9, #fff);
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.1),
      0 2px 10px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.85rem;
    padding: 0.25rem;

    .cta {
      border-radius: 0.6rem;
      padding: 1rem 2rem;
      background-image: linear-gradient(0deg, #fefefe, #f4f4f4);
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  // Button is active
  &:active {
    .button__inner {
      padding: 0.1rem;

      .cta {
        padding: 1.15rem 2.125rem;
        background-image: linear-gradient(0deg, #fafafa, #dbdbdb);
        opacity: 0.85;
        // & > * {
        //   opacity: 0.2;
        // }
      }
    }
  }
}
</style>
