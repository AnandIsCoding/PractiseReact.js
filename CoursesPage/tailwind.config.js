/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 8px 8px -1px rgba(59, 130, 246, 0.5), 0 11px 8px -2px rgba(59, 130, 246, 0.5)',
      },
    },
    
  },
  plugins: [],
}