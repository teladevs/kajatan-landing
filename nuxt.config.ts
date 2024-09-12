
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss","@formkit/nuxt",'nuxt-headlessui','nuxt-anchorscroll'],
  nitro: {
    preset: 'node-server',
  },
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
    },
  }
})