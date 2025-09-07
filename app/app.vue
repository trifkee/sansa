<script setup>
// Components
import Header from "ui/components/moleculs/Header.vue";
import NewFelling from "ui/components/moleculs/NewFelling.vue";
import Navigation from "ui/components/organism/Navigation.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <NewFelling />
  </div>
  <Navigation />
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.header {
  &__title {
    font-style: italic;
    font-weight: 700;
    font-family: "Cormorant Garamond", serif;
    font-size: 1.5rem;
  }

  .welcome-message {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 10rem;
      outline: 1px solid rgb(0, 0, 0, 0.1);
      background-image: linear-gradient(0deg, #fff, #e9e9e9);
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-weight: 700;

      &__icon {
        color: var(--primary-color);
      }
    }

    .greeting {
      font-size: 1rem;
      font-weight: 500;

      span {
        font-weight: 700;
      }
    }
  }
}
</style>
