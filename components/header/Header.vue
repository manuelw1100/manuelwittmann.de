<template>
  <CommonMobileMenu :navItems="navItems" />
  <header
    class="rn-header haeder-default black-logo-version header--fixed header--sticky"
  >
    <div
      class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center"
    >
      <!-- Start Header Left -->
      <div class="col-lg-2 col-6">
        <div class="header-left">
          <div class="logo">
            <nuxt-link to="/">
              <nuxt-img
                :width="180"
                :height="70"
                class="logo-light"
                src="/assets/images/logo/logo_mw3.svg"
                style="object-fit: contain"
                alt="logo-image"
              />
              <nuxt-img
                class="logo-dark"
                src="/assets/images/logo/logo_mw3.svg"
                style="object-fit: contain"
                :width="180"
                :height="70"
                alt="logo-image"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- End Header Left -->
      <!-- Start Header Center -->
      <div class="col-lg-10 col-6">
        <div class="header-center">
          <nav
            id="sideNav"
            class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav"
          >
            <!-- Start Mainmanu Nav -->
            <ul class="primary-menu nav nav-pills scrollspyLinks">
              <HeaderNav :navItems="navItems" />
            </ul>

            <!-- End Mainmanu Nav -->
          </nav>
          <!-- Start Header Right  -->
          <div class="header-right">
            <div class="hamberger-menu d-block d-xl-none">
              <i
                id="menuBtn"
                @click="menuOpen"
                class="feather-menu humberger-menu"
              ></i>
            </div>
            <div class="close-menu d-block">
              <span class="closeTrigger">
                <i data-feather="x"></i>
              </span>
            </div>
          </div>
          <!-- End Header Right  -->
        </div>
      </div>
      <!-- End Header Center -->
    </div>
  </header>
</template>

<script setup>
import { menuOpen } from "~/utlis/menuToggle";

defineProps(["navItems"]);
</script>

<style lang="scss" scoped>
.rn-header.header--fixed.sticky {
  background-color: #14203a;
  //box-shadow: 10px 10px 19px rgba(20, 32, 58, 0.2);
  box-shadow: 10px 10px 19px rgba(0, 170, 204, 0.08);
}
</style>
