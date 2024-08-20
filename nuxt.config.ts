// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@formkit/nuxt",'nuxt-headlessui'],
  formkit: {
    autoImport: true,
    defaultConfig: false,
    configFile: './formkit.config.ts',
  },
  headlessui: {
    prefix: 'Headless'
  },
  runtimeConfig: {
    public: {
      apiBase: import.meta.env.NUXT_API_BASE_URL,
      req: process.server ? require('http').IncomingMessage : undefined
    },
  }
})