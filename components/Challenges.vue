<template>
  <div
    class="rn-pricing-area rn-section-gap scrollSpysection section-separator"
    id="challenges"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Häufige IT-Probleme</span>
            <h2 class="title">Kennst du diese Probleme?</h2>
          </div>
        </div>

        <div
          class="col-12 col-md-12 col-lg-10 col-xl-10 offset-lg-1 offset-xl-1"
        >
          <!-- Pricing Area -->
          <div class="row row--25 mt_md--10 mt_sm--10 doctor-feature">
            <!-- Start Single Service -->
            <div
              v-for="(elm, i) in features4"
              :key="i"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              class="col-12 mb--30"
            >
              <div class="rn-service">
                <div class="inner row">
                  <div class="icon col-2">
                    <i
                      aria-hidden="true"
                      :class="`rbt ${elm.iconClass} danger-icon`"
                    ></i>
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
[data-aos] {
  min-height: 200px;
}

.danger-icon {
  color: var(--color-danger) !important;
}
.doctor-feature {
  margin-top: 60px;
}
.rn-service:hover {
  .title {
    color: #dbdce0 !important;
  }
}
</style>
