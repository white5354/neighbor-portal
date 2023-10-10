/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      textColor: {
        primary: '#f3d54b', // 主色
        regular: '#9198a4', // 常规色
        secondary: '#666666', // 次要色
        disabled: '#C9CDD4', //禁用色
        error: 'red', // 错误色
        warn: '', //警示色
      },
      backgroundColor: {
        primary: '#f3d54b',
        secondary: '#1a1a1a',

      }
    },
  },
  plugins: [],
}

