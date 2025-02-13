module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenOne: '#AEC3AE',
        greenTwo: '#C1CFA1',
        greenThree: '#CAE6B2',
        lightPink: '#FFE2E2',
        darkPink: '#FFCCE1',
        strawberry: '#FF748B',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
        cedarville: ['"Cedarville Cursive"', 'cursive'],
      },
    },
  },
  plugins: [],
}