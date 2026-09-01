import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        edusphereInk: "#24104F",
        edusphereInkMuted: "#3B1B76",
        edusphereSurface: "#F7F3FF",
        eduspherePanel: "#FFFFFF",
        edusphereBorder: "#E9DDFD",

        edusphereSky: "#C3EBFA",
        edusphereSkyLight: "#EDF9FD",

        eduspherePurple: "#CFCEFF",
        eduspherePurpleLight: "#F1F0FF",

        eduspherePurpleDark: "#7C3AED",
        eduspherePurpleDeep: "#24104F",
        eduspherePurpleMuted: "#3B1B76",

        edusphereYellow: "#FCD34D",
        edusphereYellowLight: "#FEFCE8",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
