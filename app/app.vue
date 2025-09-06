<script setup>
// Components
import Button from "ui/components/atoms/Button.vue";
import Mood from "ui/components/atoms/Mood.vue";
import Switch from "ui/components/atoms/Switch.vue";

// Types
import { MOODS } from "lib/constants/moods";

// Store
import { useGeneralSettings } from "store/general";

// General
const store = useGeneralSettings();

const appName = store.appName;
const user = "John Doe";
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h1 class="header__title">{{ appName }}</h1>
      <div class="welcome-message">
        <p class="greeting">
          Hey, <span>{{ user }}</span> 👋
        </p>

        <div class="date">
          {{
            new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })
          }}
          <Icon class="date__icon" name="akar-icons:calendar" />
        </div>
      </div>
    </div>
    <div class="moods">
      <Mood v-for="mood in MOODS" :key="mood.value" :mood="mood" />
    </div>

    <Switch />
    <Button>
      <template #label>Button</template>
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
}
.header {
  &__title {
    font-style: italic;
    font-weight: 700;
    font-family: "Crimson Text", serif;
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
      font-family: "Crimson Text", serif;
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

.moods {
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 0.25rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  & > * {
    flex-shrink: 0;
    scroll-snap-align: center;
  }
}
</style>
