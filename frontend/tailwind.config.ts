import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'font-base': ['Cormorant Upright', 'serif'],
      'font-alt': ['Open Sans', 'sans-serif']
  
    },
    colors: {
      golden: '#DCCA87',
      black: '#0C0C0C',
      red: '#EF4444',
      blue: {
        300: '#93c5fd',
        700: '#0369a1'
      },
      gray: {
        400: '#9ca3af', 
        300: '#d1d5db',
        100: '#f3f4f6',
        500: "#6b7280"
      },
      crimson: '#F5EFDB',
      yellow: '#F2C017',
      white: '#FFFFFF'
    }
  },
  plugins: [],
};
export default config;
