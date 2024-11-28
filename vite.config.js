import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/xstate/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});

/* manifest: {
        protocol_handlers: [{ protocol: "mailto", url: "/newEmail?to=%s" }],
        display_override: ["window-controls-overlay"],
        name: "",
        short_name: "",
        display: "standalone",
        description:""
        lang: "ES",
        dir: "auto",
        theme_color: "#c7c7c7",
        background_color: "#fff",
        orientation: "any",
        id: "appID123",
        iarc_rating_id: "e58c174a-81d2-5c3c-32cc-34b8de4a52e9",
        categories: ["business", "productivity"],
        icons: [
          {
            src: "https://i.imgur.com/img.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/img.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "https://i.imgur.com/img.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/img.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],

        scope: "/",
        screenshots: [
          {
            src: "https://i.imgur.com/img.png",
            sizes: "1920x1080",
            type: "image/png",
            description: "Home Screen",
          },
        ],
        shortcuts: [
          {
            name: "Home",
            url: "/",
            icons: [
              {
                src: "https://i.imgur.com/img.png",
                sizes: "96x96",
                type: "image/png",
                purpose: "any",
              },
            ],
          },
        ],
        related_applications: [
          {
            platform: "windows",
            url: "https://rcristianh.github.io/pero/",
            id: "blog.personalMB",
          },
          {
            platform: "windows",
            url: "https://rcristianh.github.io/repo/",
          },
        ],
        version: "0.0.0",
      }, */
