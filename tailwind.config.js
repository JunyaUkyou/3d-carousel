// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rain: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(400px)' }, // コンテナの高さ以上に設定
        },
      },
      animation: {
        rain: 'rain 0.8s linear infinite',
      },
    },
  },
}