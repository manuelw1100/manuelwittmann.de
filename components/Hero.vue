<template>
  <div id="home" class="rn-slider-area scrollSpysection">
    <div class="slide slider-style-1">
      <div class="container">
        <div class="row row--30 align-items-center">
          <div class="order-1 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
            <div class="content">
              <div class="inner">
                <span class="subtitle">Web-Lösungen | Beratung & Entwicklung</span>
                <h1 class="title">
                  <span>Mehr Wachstum</span> mit einer Weblösung<br />
                </h1>

                <div>
                  <p class="description">
                    Ich entwickle deine Weblösung – <span>flexibel, skalierbar und barrierefrei</span>, damit sie für
                    alle nutzbar
                    ist. Perfekt für dein Wachstum. Profitiere von mehr als 12 Jahren Erfahrung.
                  </p>
                  <a href="#" class="rn-btn btn-theme mt-5">
                    <span>Kostenloses Kennenlern-Gespräch buchen</span>
                    <i data-feather="arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="order-2 order-lg-2 col-lg-5">
            <div class="thumbnail">
              <div class="inner">
                <nuxt-img class="img-fluid custom-img" :width="620" :height="860"
                  src="/assets/images/about/ich_mit_pc.png" alt="Personal Portfolio Images" />
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

//Erfolgreich mit einer modernen, performanten Web-Anwendung

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

.white-version .slide .thumbnail::before {
  background: none !important;
  box-shadow: none !important;
}

p span {
  //todo: unterstreichen mit abstand zwishcn font und linie
  text-decoration: underline;
  //text-decoration-color: #f7f7f7;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

// .custom-img {
//   max-width: 100%;
//   height: auto;
// }

@media (max-width: 992px) {
  .custom-img {
    width: 60%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .custom-img {
    width: 60%;
    height: auto;
  }
}
</style>
