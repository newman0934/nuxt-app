// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000/api'
    }
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'tw',
        iso: 'zh-TW',
        file: 'tw.json'
      }
    ],
    defaultLocale: 'tw',
    strategy: 'no_prefix'
  }
})
