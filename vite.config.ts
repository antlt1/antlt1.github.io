import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build:{
    outDir: 'dist', // Thư mục đầu ra
  },
  base: '/',
  //setting port to 3000
  server: {
    port: 3000,
    hmr: true, // Enable Hot Module Replacement
  },
  //setting base to /
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Remove any Tailwind-related imports
      },
    },
  },
  define: {
    "process.env": {}, // Ensure Firebase works with Vite
  },
});
