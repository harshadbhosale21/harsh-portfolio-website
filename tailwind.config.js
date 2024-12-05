
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '160px': '160px',
      },
      colors: {
        primary: {
          main: "#c104de",
        },
        info: {
          main: "#00BFFF"
        }
      }
    },
  },
  plugins: [],
}

