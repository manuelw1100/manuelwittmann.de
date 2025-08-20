<template>
  <div class="white-version spybody">
    <Header :navItems="navItemsMainDemo" />
    <div class="main-page-wrapper">
      <Hero />
      <Challenges />
      <Features />
      <MyOffers />
      <Testimonials />
      <div class="section-separator"></div>
      <About />
      <Skills />
      <Portfolio />
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
  title: "Weblösungen Beratung & Entwicklung | Vue Freelancer | CMS",
  description:
    "Maßgeschneiderte Weblösungen für Automotive & Smart Energy. Ich bin ein erfahrener Vue Freelancer und Frontend-Entwickler, spezialisiert auf Vue-Entwicklung, Headless CMS und moderne Frontend-Technologien – profitiere von über 12 Jahren Expertise für deinen digitalen Erfolg.",
});

import Header from "~/components/header/Header.vue";
import { navItemsMainDemo } from "~/data/menu";
</script>
