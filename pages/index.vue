<template>
  <div class="white-version spybody">
    <Header :navItems="navItemsMainDemo" />
    <div class="main-page-wrapper">
      <Hero />
      <Challenges />
      <Features />
      <Testimonials />
      <div class="section-separator"></div>
      <MyOffers />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "preload",
      as: "font",
      href: "/assets/fonts/Feather.woff?sdxovp",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
});
useSeoMeta({
  title:
    "Mehr Wachstum mit maßgeschneiderten Web-Anwendungen | Dein Experte für Entwicklung & Beratung",
  description:
    "Ich entwickle maßgeschneiderte, flexible und skalierbare Web-Anwendungen, die Dein Wachstum unterstützen. Profitiere von über 12 Jahren Erfahrung in der Entwicklung von digitalen Lösungen für alle Branchen.",
});

import Header from "~/components/header/Header.vue";
import { navItemsMainDemo } from "~/data/menu";
</script>
