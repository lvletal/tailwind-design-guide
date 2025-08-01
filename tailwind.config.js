/** @type {import('tailwindcss').Config} */
const tokens = require('./build/tailwind-tokens.js');

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      ...tokens.theme.extend,
      // 추가 커스텀 스타일이 있다면 여기에 추가
    },
  },
  plugins: [],
}
