import { defineNuxtConfig } from '@nuxt/bridge';

import tailwind from "tailwindcss";

export default defineNuxtConfig({
  bridge: {
    vite: true,
  },
  vite: {
    css: {
      postcss: [tailwind()],
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
});
