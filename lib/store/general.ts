// General
import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

// Types
import type { IconType } from "types/mood";

// Constants
import { COLORS } from "lib/constants/colors";

export const useGeneralSettings = defineStore("general", () => {
  const appName = "Sensa";

  const icons = ref<IconType>("fluffy");
  const primaryColor = ref<string>("#6366F1");
  const secondaryColor = ref<string>("#fff");
  const darkerColor = ref<string>("#4F46E5");
  const backgroundColor = ref<string>("#F8FAFC");
  const onPrimaryColor = ref<string>("#FFFFFF");
  const borderColor = ref<string>("#C8EDE0");
  const surfaceColor = ref<string>("#FFFFFF");
  const backgroundGradient = ref<string>(
    "linear-gradient(135deg, #A8E6CF, #6FC8A7, #E6F9F2)"
  );

  function handleChangeIconStyle(style: IconType) {
    icons.value = style;
  }

  function setCSSVariable(name: string, value: string) {
    document?.documentElement.style.setProperty(`--${name}`, value);
  }

  function setCSSVariables() {
    setCSSVariable("primary-color", primaryColor.value);
    setCSSVariable("secondary-color", secondaryColor.value);
    setCSSVariable("darker-color", darkerColor.value);
    setCSSVariable("background-color", backgroundColor.value);
    setCSSVariable("on-primary-color", onPrimaryColor.value);
    setCSSVariable("border-color", borderColor.value);
    setCSSVariable("surface-color", surfaceColor.value);
    setCSSVariable("background-gradient", backgroundGradient.value);
  }

  watch(
    primaryColor,
    () => {
      setCSSVariables();
    },
    { immediate: true }
  );

  onMounted(() => {
    const colors = COLORS["pastelCalm"]["mintGreen"];
    primaryColor.value = colors.primary;
    secondaryColor.value = colors.text;
    darkerColor.value = colors.darker;
    backgroundColor.value = colors.background;
    onPrimaryColor.value = colors.onPrimary;
    borderColor.value = colors.border;
    surfaceColor.value = colors.surface;
    backgroundGradient.value = colors.backgroundGradient;
  });

  return {
    appName,
    icons,
    handleChangeIconStyle,
    primaryColor,
    secondaryColor,
    darkerColor,
    backgroundColor,
    onPrimaryColor,
    borderColor,
    surfaceColor,
    backgroundGradient,
  };
});
