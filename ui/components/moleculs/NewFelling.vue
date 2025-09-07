<script setup lang="ts">
import MoodCarousel from "ui/components/moleculs/MoodCarousel.vue";
</script>

<template>
  <article class="new-felling">
    <div class="new-felling__inner">
      <p class="title">How do you feel today?</p>
      <MoodCarousel />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.new-felling {
  background-image: linear-gradient(0deg, #fff, #e9e9e9);
  padding: 0.5rem;
  border-radius: 1.25rem;

  &__inner {
    background-image: linear-gradient(0deg, #e9e9e9, #fff);
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.1),
      0 2px 10px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.85rem;
    padding: 0.5rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .title {
      font-weight: 700;
      font-size: 1rem;
      padding-left: 0.5rem;
    }
  }
}
</style>
