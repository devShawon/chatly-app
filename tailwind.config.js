/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      maxWidth: {
        'container': '1280px',
      },
      colors: {
        'dark-blue': '#282938',
        'tory-blue': '#385185',
        'mantine-blue': '#4cb5f9',
        'star-blue': '#0095f6',
        'deep-blue': '#1877f2',
        'black': '#000',
        'white': '#fff',
        'dust-white': '#fafafa',
        'reval-white': '#737373',
        'pixel-white': '#dbdbdb',
        'errigal-white': '#f0f2f5',
      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif',
        'man-rope': '"Manrope", sans-serif',
        'arizonia': '"Arizonia", cursive',
      },
    },
  },
  plugins: [],
}