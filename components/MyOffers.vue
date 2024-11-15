<template>
  <div id="offer" class="rn-project-area portfolio-style-two rn-section-gap scrollSpysection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
            class="section-title text-left mb_md--25 mb_sm--25">
            <span class="subtitle">Schnelle Klarheit und ein Plan</span>
            <h2 class="title">Gratis IT-Beratung</h2>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"
        id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <!-- Start Single Item  -->

          <div class="carousel-item active">
            <div class="portfolio-single">
              <div class="row direction">
                <div class="col-lg-5">
                  <div class="inner">
                    <h3 class="title h5">{{ elm.title }}</h3>
                    <p class="discription">
                      {{ elm.description }}
                    </p>
                    <div class="ft-area">
                      <div class="feature-wrapper">
                        <div v-for="(elm2, i2) in elm.features" :key="i2" class="single-feature">
                          <i aria-hidden="true" class="rbt feather-check-square check-icon"></i>
                          <p>{{ elm2 }}</p>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="rn-btn btn-theme mt-5 d-lg-none">
                      <span>Jetzt kostenlose Beratung buchen</span>
                      <i data-feather="arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-7 col-xl-7">
                  <div class="thumbnail">
                    <nuxt-img :width="800" :height="600" :src="elm.imgSrc" alt="image" />

                  </div>
                  <a href="#" class="rn-btn btn-theme mt-5 d-none d-lg-inline-block"
                    @click="openBooking('https://meet.brevo.com/manuel-wittmann/borderless?l=analsyse-gesprach')">
                    <span>Jetzt kostenlose Beratung buchen</span>
                    <i data-feather="arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Item  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { portfolios2 } from "~/data/portfolios";
const elm = portfolios2[0];

import { useNuxtApp } from '#app'

const { $openBrevoBooking } = useNuxtApp();

const openBooking = (url) => {
  $openBrevoBooking(url)
}
</script>

<style lang="scss" scoped>
.white-version .slide .thumbnail::before {
  background: none !important;
  box-shadow: none !important;
}

.check-icon {
  color: var(--color-primary);
  margin-right: 6px;
  font-size: 24px;
}
</style>
