import type { Config } from "tailwindcss";

/**
 * El sistema de diseno vive en globals.css y en utilidades con valores
 * arbitrarios, asi que aqui no queda nada que extender. Fuera daisyui y
 * tailwindcss-animate (ninguna de sus clases se usa), los colores de shadcn
 * (dependian de variables que ya no existen) y los keyframes de magicui.
 */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
