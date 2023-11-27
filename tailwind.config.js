/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_stellar: "#8A226B",
        custom_slate: "#3F5A62",
        custom_infinity: "#426A82"
      },
      maxWidth: {
       30: "65px"
      }
    },
    
  },
  plugins: [],
};
