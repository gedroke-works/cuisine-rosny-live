module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins'],
      },
      backgroundImage: {
        'hero': "url(./img/hero.jpg)",
      },
      minHeight: {
        "screen-75": "75vh",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
