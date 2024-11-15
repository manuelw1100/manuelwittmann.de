<template>
  <div class="rn-service-area rn-section-gap section-separator scrollSpysection" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-left" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"
            data-aos-once="true">
            <span class="subtitle">Meine Leistungen</span>
            <h2 class="title">Was ich mache</h2>
          </div>
        </div>
      </div>
      <div class="row row--25 mt_md--10 mt_sm--10">
        <!-- Start Single Service -->
        <div v-for="(elm, i) in features" :key="i" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"
          data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
          <div class="rn-service">
            <div class="inner">
              <div class="icon">
                <i :data-feather="elm.icon"></i>
              </div>
              <div class="content">
                <h3 class="title">
                  <span>{{ elm.title }}</span>
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
    </div>
  </div>
</template>

<script setup>
import { features } from "~/data/features";
</script>

<style lang="scss" scoped></style>
