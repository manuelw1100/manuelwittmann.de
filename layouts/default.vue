<template>
  <slot></slot>
</template>

<script setup>
import feather from "feather-icons";
import AOS from "aos";

onMounted(() => {
  // Check if the window object is defined
  if (typeof window !== "undefined") {
    // Import the script only on the client side
    import("bootstrap/dist/js/bootstrap.esm").then(() => {
      // Module is imported, you can access any exported functionality if
    });
  }
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header--sticky");
    if (window.scrollY > 250) {
      header?.classList.add("sticky");
    } else {
      header?.classList.remove("sticky");
    }
  });
  AOS.init();

  feather?.replace();
});
watch(
  () => useRoute().path,
  () => {
    feather?.replace();
  }
);

// TODO: move this to nuxt.config.js?
// TODO: need I installing bootstrap, or can ein remove it from package.json?
</script>

<style lang="scss"></style>
