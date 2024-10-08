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
        <p class="discription">
          Inbio is a personal portfolio template. You can customize all.
        </p>
      </div>
      <div class="content">
        <ul class="primary-menu nav nav-pills onepagenav scrollspyLinks2">
          <li v-for="(elm, i) in navItems" :key="i" class="nav-item">
            <a @click="closeMobileMenu" :class="`nav-link smoth-animation ${!i ? 'active' : ''}`" :href="elm.href">{{
              elm.title }}</a>
          </li>
        </ul>
        <!-- social sharea area -->
        <div class="social-share-style-1 mt--40">
          <span class="title">find with me</span>
          <ul class="social-share d-flex liststyle">
            <li class="facebook">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg></a>
            </li>
            <li class="instagram">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg></a>
            </li>
            <li class="linkedin">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg></a>
            </li>
          </ul>
        </div>
        <!-- end -->
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
