import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    vite: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
});
