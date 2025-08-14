import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  alias: {
    "@/": resolve(__dirname, "./"),
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },

  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Cambo: [400, 700],
      Playball: [400],
    },
  },
});
