/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#091731",
        200: "#4584ff",
        logoText: "#4584ff",
        productPrice: "#626262",
        red: "#FF1515",
        green: "#00A711",
      },
      borderColor: {
        200: "#e7e7e7",
        darkborder: "#313D4B",
        borderBlue: "#599cfa",
        borderOrange: "#e27861",
        borderMalt: "#f1ba40",
        borderDarkBlue: "#4584ff",
        borderCyan: "#7dded6",
      },
      backgroundColor: {
        200: "#4584ff",
        100: "#E7E7E7",
        dark: "#161C23",
        dark200: "#0D1116",
        button: "rgba(69, 132, 255, 0.08)",
        title: "#291b22",
        paraBg: "#B5D8FE",
      },
      width: {
        login: "558px",
        logo: "47px",
      },
      height: {
        login: "668px",
        logo: "32px",
      },
      border: {
        login: "8px",
      },
      fontSize: {
        heading: "32px",
      },
      outlineColor: {
        200: "#599cfa",
      },
    },
    screens: {
      "2xs": "200px",
      // xs: ["max", "200px"],
      xs: "200px",
      // => @media (min-width: 400px) { ... }
      xss: "400px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  darkMode: "class",
  plugins: [],
};
