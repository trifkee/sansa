<script setup lang="ts">
const NAVIGATION_ITEMS = [
  { name: "Home", icon: "akar-icons:home-alt1", link: "/" },
  { name: "Add Mood", icon: "akar-icons:circle-plus", link: "/add-mood" },
  { name: "Settings", icon: "akar-icons:gear", link: "/settings" },
];
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="(link, indx) in NAVIGATION_ITEMS"
        :key="link.link"
        :class="{
          item: true,
          [`item--${indx}`]: true,
          active: $route.path === link.link,
          featured: link.link === '/add-mood',
        }"
      >
        <NuxtLink :href="link.link">
          <div class="icon-wrapper">
            <Icon :class="`icon icon--${link.name}`" :name="link.icon" />
          </div>
          <span class="name"> {{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  isolation: isolate;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px); /* Safari podrška */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background-gradient);
    opacity: 0.5;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px); /* Safari podrška */
    z-index: -1;
  }

  &__list {
    position: relative;
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;

    .item {
      a {
        height: 100%;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:hover {
          text-decoration: underline;
        }

        .icon {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
          opacity: 0.5;
        }

        .name {
          text-decoration: none;
          opacity: 0.5;
          font-weight: 300;
          font-size: 0.75rem;
        }
      }

      &.active {
        .name {
          opacity: 1;
        }

        .icon {
          opacity: 1;
        }
      }

      &.featured {
        .name {
          margin-top: auto;
        }
        .icon-wrapper {
          top: -50%;
          position: absolute;
          color: var(--surface-color);
          background: var(--darker-color);
          border-radius: 100rem;
          aspect-ratio: 1;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon {
            opacity: 1;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
