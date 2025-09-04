<template>
  <div class="header">
    <h1>Sensa</h1>
    <div class="welcome-message">
      <p>
        Good Mornign, <span>{{ user }}</span>
      </p>
      <p>How was your day?</p>
    </div>

    <div class="moods">
      <Mood v-for="mood in MOODS" :key="mood.id" :mood="mood" />
    </div>
  </div>

  <Button>
    <template #label>Button</template>
  </Button>
</template>

<script setup>
import Button from "~ui/components/atoms/Button.vue";
import Mood from "~ui/components/atoms/Mood.vue";

import { MOODS } from "~lib/constants/moods";

const user = "John Doe";
</script>

<style lang="scss" scoped>
.moods {
  display: flex;
  gap: 0.25rem;
  scroll-snap-type: x mandatory;
  overflow-x: auto;

  & > * {
    scroll-snap-align: start;
  }
}
</style>
