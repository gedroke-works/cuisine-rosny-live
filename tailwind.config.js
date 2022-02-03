module.exports = {
  content: ['./*.html', ".node_modules/flowbite/**/*.js"],
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
    require('flowbite/plugin'),
  ],
}
