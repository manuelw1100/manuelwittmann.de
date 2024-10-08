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

<style lang="scss">
@import "../public/assets/css/vendor/bootstrap.min.css";
@import "../public/assets/css/vendor/slick.css";
@import "../public/assets/css/vendor/slick-theme.css";
@import "../public/assets/css/vendor/aos.css";
@import "../public/assets/css/plugins/feature.css";

@import "../public/assets/scss/style.scss";
@import "swiper/css";
@import "swiper/css/effect-fade";
</style>
