// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "zh",
    strategy: "prefix",
    baseUrl: "http://localhost:3000",
    vueI18n: "config.ts",
    locales: [
      { code: "zh", name: "中文", file: "zh.ts", language: "zh" },
      { code: "en", name: "English", file: "en.ts", language: "en" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "language",
      redirectOn: "no prefix",
    },
  },
});
