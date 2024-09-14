<template>
  <header class="fixed top-0 left-0 w-full z-[1004] bg-white shadow-md">
    <div class="flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">
      <a href="/" aria-current="page" class="flex items-center">
        <img
          src="/images/logo/logo-light.webp"
          alt="Creative Agency Logo"
          class="h-10"
        />
      </a>
      <div class="hidden md:flex space-x-6">
        <a
          href="/"
          class="text-gray-800 hover:text-blue-500 transition duration-300"
          >Home</a
        >
        <a
          href="/kontakt"
          class="text-gray-800 hover:text-blue-500 transition duration-300"
          >Kontakt aufnehmen</a
        >
      </div>
      <button
        type="button"
        class="md:hidden text-gray-800"
        aria-label="Open menu"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div
        v-if="menuOpen"
        class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
      >
        <a href="/" class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >Home</a
        >
        <a
          href="/kontakt"
          class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >Kontakt aufnehmen</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
