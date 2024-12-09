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
