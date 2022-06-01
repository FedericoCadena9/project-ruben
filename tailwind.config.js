module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#133FE6',
          600: '#1031AF'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}