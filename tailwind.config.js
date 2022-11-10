/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:"'Fraunces', serif",
      },
      colors: {
        secondary : '#d4ac8e',
        primary:'#e4ded5',
        default: '#B55730',
        Stone : '#c47d57',
        navy: '#223240',
        indigo: '#302f39',
        orange: '#b65a33',
        red: '#D90F54',
        skyBlue: '#1DA1f2',
        darkBlue: '#2977c9',
        teal: '#2467BA',
        lightRed: '#E4405F',
        darkRed: '#c4302B',
        lighteal: '#16313A',
        darkteal: '#223240',
        slate: '#2d4850',
      },
      backgroundImage: {
        noise: 'url("/assets/images/noise.webp")',
        wave: 'url("/assets/images/stackedwave.svg")'
      },
      screens: {
        smm: '479px',
        smd: '770px',
        slg: '991px',
        llg: '1500px'
      },
      borderRadius: {
        full: '100%',
        lg: '80%',
        smd: '60%',
        mmd: '50%'
      },
      backgroundSize: {
        '50': '50%'
      },
      fontFamily: {
        sans: ["Fraunces", "cursive"],
        frauncesItalic: ["FrauncesItalic", "cursive"],
        frauncesBold: ["FrauncesBold", "cursive"],
        frauncesBlack: ["FrauncesBlack", "cursive"],
        frauncesBoldItalic: ["FrauncesBoldItalic", "cursive"],
        frauncesSemiBold: ["FrauncesSemiBold", "cursive"],
        fraunces144pt: ["Fraunces144p", "cursive"],
        geomanist: ["Geomanist", "cursive"],
        geomanistBold: ["GeomanistBold", "cursive"],
        robot: "'Roboto', sans-serif",
        palanquin: "'Palanquin', sans-serif",
      },
    },
  },
  plugins: [],
}
