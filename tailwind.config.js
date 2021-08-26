const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
      'pink': '#FFC5F3',
      'pinkhover': "#B74573",
      'pinklight': "#F57BE5",
      'pinkstronge': '#92003B',
      'pinkmedium': '#BA0984',
      'graypage': '#EEECFB',
      'orangelight': '#FFDCC5',
      'orangedark': '#FF3700',
      'bluedark': '#05047E',
      'bluelight': '#D9FFF1'
    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
