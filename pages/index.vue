<template>
  <div class="white-version spybody">
    <Header1 :navItems="navItemsMainDemo" />
    <div class="main-page-wrapper">
      <Hero1 />
      <Features1 />
      <!-- <PortfoliosPortfolio1 />
        <ResumesResume1 />
        <TestimonialsTestimonials1 />
        <ClientsClients1 :is-white-mode="true" />
        <PricingPricing1 />
        <BlogsBlogs1 />
        <ContactsContact1 /> -->
    </div>
    <FootersFooter2 />
    <!-- <CommonComponents /> -->
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Home MainDemo White Version || Inbio - Personal Portfolio Vue3 Nuxtjs Template",
  description: "Inbio - Personal Portfolio Vue3 Nuxtjs Template",
});
import Header1 from "~/components/header/Header1.vue";
import { navItemsMainDemo } from "~/data/menu";
</script>
