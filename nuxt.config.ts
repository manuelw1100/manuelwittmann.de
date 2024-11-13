// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxt/image"],
  plugins: ["~/plugins/brevoBooking.js"],

  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
    },
  },
  runtimeConfig: {
    public: {
      email: process.env.NUXT_MAIL_TO,
      phone: process.env.NUXT_PHONE,
    },
  },
});
