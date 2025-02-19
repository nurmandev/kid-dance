// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  compatibilityDate: "2025-01-16",
});
