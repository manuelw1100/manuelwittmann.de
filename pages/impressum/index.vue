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
                  <h1 class="title">Impressum</h1>
                </div>

                <Impressum />
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
import Impressum from "~/components/Impressum.vue";
</script>
<style scoped>
.main-page-wrapper {
  min-height: 94vh;
}

h1,
h2 {

  color: var(--color-body-white);

}
</style>
