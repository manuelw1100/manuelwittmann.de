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
  title: "Freelancer für Weblösungen | Vue & Headless CMS & mehr",
  description:
    "Abläufe optimieren mit Vue, Headless CMS, Node.js & Automatisierungstools wie n8n. Schnell, effizient & zum Festpreis. Über 12 Jahre Erfahrung.",
});

import Header from "~/components/header/Header.vue";
import { navItemsMainDemo } from "~/data/menu";
</script>
