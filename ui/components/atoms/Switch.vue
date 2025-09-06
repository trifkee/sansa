<template>
  <div class="switch">
    <input type="checkbox" class="switch__input" />
    <div class="switch__inner">
      <div class="thumb">
        <div class="thumb__inner"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.switch {
  width: 100px;
  height: 60px;
  cursor: pointer;

  background-image: linear-gradient(0deg, #fff, #e9e9e9);
  border-radius: 3.25rem;

  position: relative;

  padding: 0.5rem;

  //Actual Input
  &__input {
    cursor: pointer;
    z-index: 9;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    appearance: none;
    border-radius: 3.25rem;
  }

  &__inner {
    transition: 0.2s ease-in-out all;
    transition-delay: 1s;

    width: 100%;
    height: 100%;

    background: radial-gradient(
      100% 100% at 50% 100%,
      #f2f2f2 14.06%,
      #757575 100%,
      #b3b3b3 100%
    );
    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.1),
      inset 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    position: relative;

    .thumb {
      transition: 0.2s ease all;
      width: 3rem;
      aspect-ratio: 1;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      border-radius: 100%;

      background-image: linear-gradient(0deg, #e9e9e9, #fff);
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1),
        0px 6px 6px -1px rgba(0, 0, 0, 0.25);

      padding: 0.25rem;
      overflow: hidden;

      &__inner {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-image: linear-gradient(0deg, #fefefe, #f4f4f4);
      }
    }
  }

  .switch__input:checked ~ .switch__inner {
    background: radial-gradient(
      100% 100% at 50% 100%,
      #eafaf7 12.5%,
      #08e2a7 100%
    );
    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.1),
      inset 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  }
  .switch__input:checked ~ .switch__inner .thumb {
    left: calc(100% - 3rem);
  }
}
</style>
