import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webp from "vite-plugin-webp";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/ruslan-pastika-portfolio/",
  plugins: [
    react(),
    webp({
      quality: 80,
      override: {
        ".jpg|jpeg|png": true,
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["**/*.{js,css,html}", "**/images/*.{webp,png}"],
      manifest: {
        name: "Руслан Пастика - Frontend разработчик",
        short_name: "Pastika Portfolio",
        description: "Персональное портфолио фронтенд-разработчика",
        theme_color: "#0f0c29",
        icons: [
          {
            src: "/icon-192.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/icon-512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,woff2}"],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_animations.scss";
        `,
      },
    },
  },
});
