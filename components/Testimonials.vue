<template>
  <div class="rn-testimonial-area rn-section-gap section-separator scrollSpysection" id="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Einblick in erfolgreiche Zusammenarbeit</span>
            <h2 class="title">Referenzen</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(elm, i) in testimonials1" :key="i"
          :class="['col-lg-5', 'col-md-12', 'col-sm-12', { 'offset-lg-1': i === 0 }]">
          <div class="testimonial-pb mb--30">
            <div class="testimonial mt--50 mt_md--40 mt_sm--40">
              <div class="inner">

                <div class="card-description">
                  <div class="title-area">
                    <div class="title-info">
                      <h3 class="title">{{ elm.title }}</h3>
                      <span class="date">{{ elm.date }}</span>
                    </div>
                  </div>
                  <div class="seperator"></div>
                  <p class="discription">
                    {{ elm.description }}
                  </p>
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
import { testimonials1 } from "~/data/testimonials";
</script>

<style lang="scss" scoped>
.card-description::after {
  z-index: 1 !important;
}
</style>
