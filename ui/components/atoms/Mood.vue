<template>
  <Button>
    <template #label>
      <p class="icon">
        {{ props.mood.icon }}
      </p>
    </template>
  </Button>
</template>

<script setup lang="ts">
// @ts-ignore - Imported correctly
import Button from "~ui/components/atoms/Button.vue";

type MoodType = {
  mood: {
    id: number;
    label: string;
    icon: string;
  };
};

const props = defineProps<MoodType>();
</script>

<style lang="scss" scoped>
.icon {
  scale: 3;
}
</style>
