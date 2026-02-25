// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  colorMode: {
    preference: 'dark'
  },

  compatibilityDate: '2026-02-24'
})
