<script setup lang="ts">
import { useGeneralSettings } from "store/general";

const store = useGeneralSettings();

const appName = store.appName;
const user = "John";

const date = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});
</script>

<template>
  <div class="header">
    <div class="header__body">
      <!-- <div class="date">
        {{ date }}
        <Icon class="date__icon" name="akar-icons:calendar" />
      </div> -->
      <p class="greeting">
        Good Morning,
        <span>{{ user }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin: -1rem -1rem 0 -1rem;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &__app-name {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    color: var(--darker-color);
  }

  &__body {
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    .greeting {
      // font-family: "Cormorant Garamond", serif;
      // font-style: italic;
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 0.85;

      span {
        opacity: 0.5;
        font-style: normal;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 10rem;
      background: var(--background-gradient);
      outline: 1px solid var(--border-color);
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-weight: 700;
      color: var(--text-color);
      text-wrap: nowrap;

      &__icon {
        color: var(--text-color);
      }
    }
  }
}
</style>
