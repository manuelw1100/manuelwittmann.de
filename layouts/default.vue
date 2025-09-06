<template>
  <slot></slot>
</template>

<script setup>
import feather from "feather-icons";
import AOS from "aos";

onMounted(() => {
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
</script>

<style lang="scss"></style>
