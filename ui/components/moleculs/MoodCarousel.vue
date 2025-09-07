<script setup lang="ts">
// Components
import Mood from "ui/components/atoms/Mood.vue";
// Types
import { MOODS } from "lib/constants/moods";
</script>

<template>
  <div class="moods">
    <Mood v-for="mood in MOODS" :key="mood.value" :mood="mood" />
  </div>
</template>

<style lang="scss" scoped>
.moods {
  margin-inline: -1rem;
  padding-inline: 1rem;

  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 0.25rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* sakrij scroll bar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE i Edge */
}
.moods::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.moods > * {
  flex-shrink: 0;
  scroll-snap-align: center;
}
</style>
