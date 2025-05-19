/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure all relevant files are included
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
