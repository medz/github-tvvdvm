import type { Config } from 'tailwindcss';

export default {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.config.{js,ts}`,
  ],
  theme: {},
  plugins: [],
} satisfies Config;
