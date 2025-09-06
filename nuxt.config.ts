// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "@nuxt/icon"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    ui: fileURLToPath(new URL("./ui", import.meta.url)),
    lib: fileURLToPath(new URL("./lib", import.meta.url)),
    store: fileURLToPath(new URL("./lib/store", import.meta.url)),
    components: fileURLToPath(new URL("./ui/components", import.meta.url)),
    types: fileURLToPath(new URL("./lib/types", import.meta.url)),
  },
  css: ["~/assets/css/reset.css", "~/assets/css/variables.css"],
  googleFonts: {
    families: {
      Inter: [200, 400, 700],
      CrimsonText: [400, 600, 700],
    },
    download: true,
  },
});
