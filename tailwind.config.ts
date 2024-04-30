import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "prioBlue": "rgba(87, 205, 255, 1)",
        "prioRed": "rgba(255, 110, 110, 1)",
        "prioPurple": "rgba(213, 159, 255, 1)",
        "toDoBg": "rgba(174, 230, 217, 1)",
        "mainBg": "rgba(241, 255, 252, 1)",
        "inProgBg": "rgba(111, 223, 196, 1)",
        "completedBg": "rgba(62, 190, 159, 1)",
        "taskDescBg": "rgba(244, 244, 244, 1)",
        "darkGrayTxt": "rgba(94, 94, 94, 1)",
        "greenTxt": "rgba(11, 125, 97, 1)",
        "cancelBtn": "rgba(171, 171, 171, 1)",
      }
    },
  },
  plugins: [flowbite.plugin(),],
};
export default config;
