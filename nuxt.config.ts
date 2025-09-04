// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    "~ui": fileURLToPath(new URL("./ui", import.meta.url)),
    "~lib": fileURLToPath(new URL("./lib", import.meta.url)),
  },
});
