// General
import { defineStore } from "pinia";
import { ref } from "vue";

// Types
import type { IconType } from "types/mood";

export const useGeneralSettings = defineStore("general", () => {
  const appName = "Sensa";

  const icons = ref<IconType>("default");
  const primaryColor = ref<string>("#6366F1");

  function handleChangeIconStyle(style: IconType) {
    icons.value = style;
  }

  return { appName, icons, handleChangeIconStyle, primaryColor };
});
