// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxt/image", "nuxt-booster"],

  booster: {
    detection: {
      performance: true,
      browserSupport: true,
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },
    targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },

  plugins: ["~/plugins/brevoBooking.js"],

  css: [
    "~/assets/css/vendor/bootstrap.min.css",
    "~/assets/css/vendor/slick.css",
    "~/assets/css/vendor/slick-theme.css",
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
    build: {
      minify: "esbuild",
    },
  },

  runtimeConfig: {
    public: {
      email: process.env.NUXT_MAIL_TO,
      phone: process.env.NUXT_PHONE,
    },
  },
});
