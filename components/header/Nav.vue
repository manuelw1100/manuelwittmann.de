<template>
  <li v-for="(elm, i) in navItems" :key="i" class="nav-item">
    <a :class="`nav-link ${i == 0 ? 'current' : ''}`" :href="elm.href">{{
      elm.title
    }}</a>
  </li>
  <!-- <li class="nav-item">
    <a href="#" class="rn-btn cart-icon">
      <i class="feather-shopping-cart"></i>
      <span class="cart-item"> 0 </span>
    </a>
  </li> -->
</template>

<script setup>
import addScrollspy from "~/utlis/addScrollSpy";
import addSmoothScroll from "~/utlis/addSmoothScroll";

defineProps(["navItems"]);
function ititScrollspy() {
  addScrollspy();
}
onMounted(() => {
  addSmoothScroll();
  window.addEventListener("scroll", ititScrollspy);
});
onUnmounted(() => {
  window.removeEventListener("scroll", ititScrollspy);
});
</script>

<style lang="scss" scoped></style>
