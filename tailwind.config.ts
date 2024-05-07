import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        lightCream: "#FFF9F4",
        lightGreen: "#F6E7D7",
        rani: "#62021C",
      },
      colors: {
        rani: "#62021C",
        lightCream: "#FFF9F4",
      },
      fontFamily: {
        rubik: "Rubik",
      }
    },
  },
  plugins: [],
};
export default config;
