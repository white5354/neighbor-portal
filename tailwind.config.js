/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      textColor: {
        primary: '#1c3355', // 主色
        regular: '#9198a4', // 常规色
        secondary: '#45587c', // 次要色
        disabled: '#C9CDD4', //禁用色
        error: 'red', // 错误色
        warn: '', //警示色
      },
      backgroundColor: {
        primary: '#f3d54b'
      }
    },
  },
  plugins: [],
}

