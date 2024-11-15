<template>
  <div class="rn-pricing-area rn-section-gap scrollSpysection section-separator" id="challenges">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-6 mb_md--40 mb_sm--40 small-margin-pricing">
          <div class="d-block d-lg-flex d-lg-left section-flex flex-wrap align-content-start h-100">
            <div class="position-sticky sticky-top rbt-sticky-top-adjust">
              <div class="section-title">
                <span class="subtitle text-left text-lg-left">Erkennst du diese Probleme
                  wieder?</span>
                <h2 class="title text-left text-lg-left">
                  Digitale <br /> Blockaden
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-xl-6">
          <!-- Pricing Area -->
          <div class="row row--25 mt_md--10 mt_sm--10 doctor-feature">
            <!-- Start Single Service -->
            <div v-for="(elm, i) in features4" :key="i" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"
              data-aos-once="true" class="col-12 mb--30">
              <div class="rn-service">
                <div class="inner row">
                  <div class="icon col-2">
                    <i aria-hidden="true" :class="`rbt ${elm.iconClass} danger-icon`"></i>
                  </div>
                  <div class="content col-10">
                    <h3 class="title">
                      <a href="#"> {{ elm.title }}</a>
                    </h3>
                    <p class="description">
                      {{ elm.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- End SIngle Service -->
          </div>
          <!-- End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { features4 } from "~/data/features";
</script>

<style lang="scss" scoped>
.danger-icon {
  color: var(--color-danger) !important;
}
</style>
