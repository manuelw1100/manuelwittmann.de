<script setup>
import Header2 from "~/components/Header2.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header class="designer-portfolio-header">
      <template v-slot:logo>
        <img src="/images/logo/logo-light.webp" alt="Creative Agency Logo" />
      </template>
    </Header>
    <Header2 />
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-auto">
      <div class="container mx-auto text-center">
        &copy; 2024 Manuel Wittmann
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
