<template>
  <div id="home" class="rn-slider-area scrollSpysection">
    <div class="slide slider-style-1">
      <div class="container">
        <div class="row row--30 align-items-center">
          <div
            class="order-1 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30"
          >
            <div class="content">
              <div class="inner">
                <span class="subtitle"
                  >Vue | Headless-CMS | Beratung & Entwicklung</span
                >
                <h1 class="title">
                  <span>Weblösungen</span> für deinen Erfolg<br />
                </h1>

                <div>
                  <p class="description">
                    Moderne Weblösungen für Automotive & Smart Energy –
                    maßgeschneidert und skalierbar. Profitiere von mehr als 12
                    Jahren Erfahrung.
                  </p>
                  <a
                    href="#"
                    class="rn-btn btn-theme mt-5"
                    @click="
                      openBooking(
                        'https://meet.brevo.com/manuel-wittmann/borderless?l=30-minutiges-meeting'
                      )
                    "
                  >
                    <span>Gratis Kennenlern-Talk buchen</span>
                    <i data-feather="arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="order-2 order-lg-2 col-lg-5">
            <div class="thumbnail">
              <div class="inner">
                <nuxt-img
                  class="img-fluid custom-img"
                  :width="620"
                  :height="860"
                  src="/assets/images/about/ich_mit_pc.webp"
                  alt="Bild von mir mit Laptop"
                  sizes="(max-width: 576px) 100vw, (max-width: 768px) 100vw, (max-width: 992px) 50vw, 50vw"
                  srcset="
        /assets/images/about/ich_mit_pc_xs.webp 240w,
        /assets/images/about/ich_mit_pc_s.webp 320w,
        /assets/images/about/ich_mit_pc_m.webp 480w,
        /assets/images/about/ich_mit_pc.webp 620w
      "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from "#app";

const { $openBrevoBooking } = useNuxtApp();

const openBooking = (url) => {
  $openBrevoBooking(url);
};

onMounted(() => {});
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
.custom-img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 992px) {
  .custom-img {
    width: 70%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .custom-img {
    width: 100%;
    height: auto;
  }
}
</style>
