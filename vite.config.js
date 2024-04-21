import animations from '@midudev/tailwind-animations';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [animations, react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  base: 'https://hector711.github.io',
});