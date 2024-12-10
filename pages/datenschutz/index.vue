<template>
  <div class="white-version">
    <Header :navItems="navItemsClean" />
    <div class="main-page-wrapper">
      <div id="about" class="rn-about-area rn-section-gap">
        <div class="container">
          <div class="row">
            <div class="col-10 mx-auto">
              <div class="contant">
                <div class="section-title text-left mb-4">
                  <h1 class="title mt-5">Datenschutz</h1>
                </div>

                <Datenschutz />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer2 />
  </div>
</template>
<script setup lang="ts">
useHead({
  meta: [{ hid: "robots", name: "robots", content: "noindex" }],
});
import { navItemsClean } from "~/data/menu";
import Header from "~/components/header/Header.vue";
import Datenschutz from "~/components/Datenschutz.vue";
</script>
<style scoped>
h1,
h2 {
  color: var(--color-body-white);
}
</style>
