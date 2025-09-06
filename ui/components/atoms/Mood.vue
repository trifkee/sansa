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

const props = defineProps<MoodType>();

//  General Logic
const store = useGeneralSettings();

const iconMode = computed(() => store.icons);
</script>

<style lang="scss" scoped>
.emoji-button {
  aspect-ratio: 1 / 1;
  width: 10rem;

  & > * {
    width: 100%;
    height: 100%;

    & > * {
      width: 100%;
      height: 100%;
    }
  }

  &__icon {
    min-width: 2rem;
    scale: 1.5;
    object-fit: contain;
  }
}
</style>
