import daisyui from 'daisyui'
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      }
    },
  },
  plugins: [
    daisyui,
    typography,
  ],
  daisyui: {
    themes: ["emerald"],
  },
}

