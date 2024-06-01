/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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