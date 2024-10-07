import animations from '@midudev/tailwind-animations';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [animations, react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "."),
      "@public": path.resolve(__dirname, "./public/"),
      "@": path.resolve(__dirname, "src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/css/init.scss";`,
      },
    },
  },
});