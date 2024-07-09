// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-200': '#f7fafc',
        'neutral-500': '#a0aec0',
        'neutral-800': '#2d3748',
        'neutral-900': '#1a202c',
      },
      height: {
        '48': '12rem', // Example custom height
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
