/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      fontFamily: {
        dm: ['DM Sans'],
      },
      colors: {
        'active': '#262626 !important',
      },
    },
    
  },
  plugins: [],
}