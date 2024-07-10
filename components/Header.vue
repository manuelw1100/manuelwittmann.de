<script setup lang="ts">
import feather from "feather-icons";
import { onMounted, onUnmounted, ref } from "vue";

const drawer = ref(false);
const menu = {
  items: [
    { title: "Home", to: "/" },
    { title: "Kontakt aufnehmen", to: "/kontakt" },
  ],
  icon: "menu",
  closeIcon: "x",
};

const onClick = () => {
  drawer.value = !drawer.value;
  if (drawer.value) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
};

const iconSvg = (icon: string) => {
  return feather.icons[icon].toSvg();
};

const handleResize = () => {
  if (window.innerWidth > 767 && drawer.value) {
    drawer.value = false;
    document.documentElement.style.overflow = "auto";
  }
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div>
    <!-- Mobile Sidebar Menu -->
    <div
      v-if="drawer"
      class="fixed inset-0 z-50 flex bg-gray-800 bg-opacity-75"
    >
      <div class="bg-white w-80 p-5">
        <div class="flex justify-between items-center">
          <div class="logo">
            <slot name="logo"></slot>
          </div>
          <button
            @click="onClick"
            aria-label="Close menu"
            v-html="iconSvg(menu.closeIcon)"
            class="text-gray-500 hover:text-gray-700"
          ></button>
        </div>
        <nav class="mt-4">
          <ul>
            <li v-for="item in menu.items" :key="item.title" class="mt-2">
              <a
                :href="item.to"
                class="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >{{ item.title }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div @click="onClick" class="flex-grow"></div>
    </div>

    <!-- Top Navbar -->
    <header class="bg-white shadow fixed w-full z-40 py-4 md:py-6">
      <div
        class="container mx-auto flex justify-between items-center px-4 md:px-8"
      >
        <router-link to="/" class="logo">
          <slot name="logo"></slot>
        </router-link>
        <div class="flex space-x-4 hidden md:flex">
          <a
            v-for="item in menu.items"
            :key="item.title"
            :href="item.to"
            class="nav-item text-gray-800 font-bold transition-colors duration-300 hover:text-blue-400 hover:bg-blue-100 p-2 rounded"
          >
            {{ item.title }}
          </a>
        </div>
        <button
          @click="onClick"
          aria-label="Open menu"
          v-html="iconSvg(menu.icon)"
          class="md:hidden text-gray-500 hover:text-gray-700"
        ></button>
      </div>
    </header>
  </div>
</template>

<style scoped>
.logo {
  @apply flex items-center justify-center;
  width: 190px; /* Small devices */
}

@media only screen and (min-width: 768px) {
  .logo {
    width: 230px; /* Medium devices */
  }
}

.logo img {
  @apply max-w-full h-auto;
}

button {
  @apply text-gray-800;
}

button:hover {
  @apply text-blue-400;
}
</style>
