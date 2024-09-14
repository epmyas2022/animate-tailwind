/** @type {import('tailwindcss').Config} */

import plugin from "plugin-tailwindcss";

import theme from "plugin-tailwindcss/theme/theme";

const { animation} = theme;

const safelist = Object.keys(animation).map((key)  => `animate-${key}`);
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin,
  ],
  safelist
}

