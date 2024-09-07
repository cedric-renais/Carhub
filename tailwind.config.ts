import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        blue: '#0034F0',
        black: '#202020',
        gray: '#404040',
        white: '#F7F7F7',
      },
      backgroundImage: {
        pattern: "url('/assets/images/pattern.webp')",
        hero: "url('assets/images/hero.webp')",
      },
    },
  },
  plugins: [],
};

export default config;
