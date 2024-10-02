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
                :width="139"
                :height="70"
                class="logo-light"
                src="/assets/images/logo/logo_mw2.svg"
                style="object-fit: contain"
                alt="logo-image"
              />
              <nuxt-img
                class="logo-dark"
                src="/assets/images/logo/logo_mw2.svg"
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
          <div class="header-right"></div>
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

<style lang="scss" scoped></style>
