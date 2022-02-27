module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '547px',
      'lg': '768px',
    },
    extend: {
      colors: {
        primary: '#07244b',
        secondary: '#0b192d',
        terciary: '#0e0f13',
        quaternary: '#102219',
      }
    },
  },
  plugins: [],
}
