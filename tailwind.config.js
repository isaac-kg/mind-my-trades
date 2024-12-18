/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tn_blue_50: "#5E31B0",
        tn_gray_50: "#F7F8FF",
        tn_green_50: "#2BC9B4",
      },
      backgroundImage: {
        tn_blue_gradient: "linear-gradient(to bottom, #fff 0%, #5E31B0 100%)"
      }
      
    },
    
  },
  plugins: [],
};
