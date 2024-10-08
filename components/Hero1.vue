<template>
  <div id="home" class="rn-slider-area scrollSpysection">
    <div class="slide slider-style-1">
      <div class="container">
        <div class="row row--30 align-items-center">
          <div class="order-1 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
            <div class="content">
              <div class="inner">
                <span class="subtitle">Frontend-Lösungen | Web-Apps | Beratung & Entwicklung</span>
                <h1 class="title">
                  Frontend-Entwicklung mit <span>Vue.js</span><br />
                </h1>

                <div>
                  <p class="description">
                    Moderne Frontend- und Web-Lösungen mit Vue.js & Co.
                    Profitiere von 6 Jahren Vue-Spezialisierung
                    und
                    über 11 Jahren Frontend-Erfahrung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="order-2 order-lg-2 col-lg-5 mt_mobile--30">
            <div class="thumbnail-circle text-center">

              <nuxt-img :width="390" :height="390" src="/assets/images/about/me.webp" alt="Personal Portfolio Images" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//import Typed from "typed.js";
import { skillsHero } from "~/data/skills";
import { socials } from "~/data/socials";
const typeitInstance = ref();

onMounted(() => {
  // typeitInstance.value = new Typed(".is-visible-one", {
  //   strings: [" Developer.", " Professional Coder.", " Developer."],
  //   typeSpeed: 26,
  //   backSpeed: 20,
  //   startDelay: 200,

  //   loop: Infinity,
  //   showCursor: false,
  // });
});
onUnmounted(() => {
  //typeitInstance.value?.destroy();
});
</script>

<style lang="scss" scoped>
.thumbnail-circle img {
  border: 14px solid #fff;
  border-radius: 100%;
  box-shadow: 0 20px 40px #0000001a, 0 20px 40px #ffffff26;
  height: auto;
  padding: 0;
  //width: 394px;
  //object-fit: contain;
}
</style>
