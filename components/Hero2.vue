<template>
  <div id="home" class="rn-slider-area scrollSpysection">
    <div class="slide slider-style-1">
      <div class="container">
        <div class="row row--30 align-items-center">
          <div class="order-1 order-lg-1 col-lg-8 mt_md--50 mt_sm--50 mt_lg--30">
            <div class="content">
              <div class="inner">
                <span class="subtitle">Web-Lösungen | Beratung & Entwicklung</span>
                <h1 class="title">
                  <span>Erfolgreich</span> mit einer modernen, performanten Web-Anwendung<br />
                </h1>

                <div>
                  <p class="description">
                    Ich entwickle Deine Weblösung – flexibel, skalierbar und barrierefrei, damit sie für alle nutzbar
                    ist. Perfekt für Dein Wachstum. Profitiere von mehr als 11 Jahren Erfahrung.
                  </p>
                  <a href="#" class="rn-btn btn-theme mt-5">
                    <span>Kostenloses Erstgespräch vereinbaren</span>
                    <i data-feather="arrow-right"></i>
                  </a>
                </div>
              </div>
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
.slide {
  padding-bottom: 0;
}

.slide .content .inner {
  margin-bottom: 100px;
}
</style>
