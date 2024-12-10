// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxt/image"],

  plugins: ["~/plugins/brevoBooking.js"],

  css: [
    "~/assets/css/vendor/bootstrap.min.css",
    // "~/assets/css/vendor/slick.css",
    // "~/assets/css/vendor/slick-theme.css",
    "~/assets/css/vendor/aos.css",
    // "~/assets/css/plugins/feature.scss",
    "~/assets/scss/style.scss",
    "swiper/css",
    "swiper/css/effect-fade",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/favicon/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/assets/favicon/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/assets/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/assets/favicon/site.webmanifest",
        },
      ],
    },
  },
  vite: {
    // build: {
    //   minify: "esbuild",
    // },
  },

  runtimeConfig: {
    public: {
      email: process.env.NUXT_MAIL_TO,
      phone: process.env.NUXT_PHONE,
    },
  },
});
