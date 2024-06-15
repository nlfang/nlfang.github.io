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
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        onedark: {
          "primary": "#E06C75",
          "secondary": "#98C379",
          "accent": "#61AFEF",
          "neutral": "#ABB2BF",
          "base-100": "#282C34",
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "primary": "#61AFEF",
          "base-100": "#282C34",
        },
      },
      "dark",
    ],
  },
};
export default config;
