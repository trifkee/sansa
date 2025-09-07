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
      Figtree: [300, 400, 600, 700],
      "Cormorant Garamond": [300, 400, 500, 600, 700],
      Playfair: [400, 600, 700, 800],
    },
    download: true,
  },
  // Dev server settings
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  nitro: {
    devProxy: {
      host: "0.0.0.0",
    },
  },
});
