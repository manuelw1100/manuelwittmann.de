// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxt/image"],

  css: [
    "~/assets/css/vendor/bootstrap.min.css",
    "~/assets/css/vendor/aos.css",
    "~/assets/scss/style.scss",
    "swiper/css",
    "swiper/css/effect-fade",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
      meta: [
        {
          property: "og:image",
          content: "/assets/images/about/og-image.jpg",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
      ],
      script: [
        ...(process.env.NUXT_PUBLIC_APP_URL === "https://manuelwittmann.de"
          ? [
              {
                src: process.env.NUXT_STATISTICS_PAGE_URL,
                defer: true,
                "data-domain": "manuelwittmann.de",
              },
            ]
          : []),
      ],
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
  vite: {},

  runtimeConfig: {
    public: {
      email: process.env.NUXT_MAIL_TO,
      phone: process.env.NUXT_PHONE,
      portalId: process.env.NUXT_HUBSPOT_PORTALID,
      formId: process.env.NUXT_HUBSPOT_FORMID,
    },
  },
});
