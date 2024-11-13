<template>
  <div class="popup-mobile-menu">
    <div class="inner mobileMenuInner">
      <div class="menu-top">
        <div class="menu-header">
          <nuxt-link class="logo" to="/">
            <nuxt-img :width="170" :height="70" src="/assets/images/logo/logo_mw2.svg" alt="Personal Portfolio" />
          </nuxt-link>
          <div class="close-button-x">
            <button @click="closeMobileMenu" class="close-menu-activation close">
              <i data-feather="x"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="content">
        <ul class="primary-menu nav nav-pills onepagenav scrollspyLinks2">
          <li v-for="(elm, i) in navItems" :key="i" class="nav-item">
            <a @click="closeMobileMenu" :class="`nav-link smoth-animation ${!i ? 'active' : ''}`" :href="elm.href">{{
              elm.title }}</a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["navItems"]);
import addScrollspy from "~/utlis/addScrollSpy";
import addSmoothScroll from "~/utlis/addSmoothScroll";
import { closeMobileMenu, mobileMenuOpen } from "~/utlis/menuToggle";

function ititScrollspy() {
  addScrollspy("nav-link smoth-animation", ".scrollspyLinks2", "active");
}
onMounted(() => {
  addSmoothScroll(".scrollspyLinks2");
  window.addEventListener("scroll", ititScrollspy);
  // Get the popup mobile menu element
  const popupMenu = document.querySelector(".popup-mobile-menu");

  // Add click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is inside the popup menu
    if (event.target.closest(".popup-mobile-menu")) {
      // Click is inside the popup menu
      // Check if the clicked element is not an inner element that should be excluded
      if (!event.target.closest(".mobileMenuInner")) {
        closeMobileMenu(event);
        // Code to handle clicks inside the popup menu but not on inner elements
      }
    } else {
      // Click is outside the popup menu
      // Code to handle clicks outside the popup menu
    }
  });
});
onUnmounted(() => {
  window.removeEventListener("scroll", ititScrollspy);
});
</script>

<style lang="scss" scoped></style>
