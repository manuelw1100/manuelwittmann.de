// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxt/image"],

  //TODO: remove next line-block
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
    targetFormats: ["webp", "jpg|jpeg|png"],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
    image: {
      screens: {
        default: 320,
        xxs: 480,
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400,
        xxl: 1600,
      },
    },
  },

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
