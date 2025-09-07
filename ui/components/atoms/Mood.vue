<template>
  <Button class="emoji-button">
    <template #label>
      <img
        :src="`/images/emojis/${iconMode}/${props.mood.value}.png`"
        alt="Emoji"
        class="emoji-button__icon"
      />
    </template>
  </Button>
</template>

<script setup lang="ts">
// Store
import { useGeneralSettings } from "store/general";

// Components
import Button from "components/atoms/Button.vue";

// Types
import type { MoodType } from "types/mood";
import { computed } from "vue";

const props = defineProps<MoodType>();

//  General Logic
const store = useGeneralSettings();

const iconMode = computed(() => store.icons);
</script>

<style lang="scss" scoped>
.emoji-button {
  aspect-ratio: 1 / 1;
  width: 5rem;

  & > * {
    width: 100%;
    height: 100%;

    & > * {
      width: 100%;
      height: 100%;
      padding: 0.2rem !important;
    }
  }

  &__icon {
    min-width: 2rem;
    scale: 0.75;
    object-fit: contain;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.25));
  }
}
</style>
