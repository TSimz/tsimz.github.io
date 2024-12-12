/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,php,js}", "./projects/*.{html,php,js}"],
  theme: {
    colors: {
      'dark': '#192E40',
      'teal': '#466e7e',
      'light': '#7AAABD',
      'sky': '#eff6ff',
      'offwhite': '#fefefe',
      'slate': {
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569'
      }
    },
    screens: {
      'xs': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [],
}
