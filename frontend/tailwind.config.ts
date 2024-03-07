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
    // colors: {
    //   golden: '#DCCA87',
    //   black: '#0C0C0C',
    //   gray: '#545454',
    //   crimson: '#F5EFDB',
    //   grey: '#AAAAAA',
    //   white: '#FFFFFF'
    // }
  },
  plugins: [],
};
export default config;
