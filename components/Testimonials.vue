<template>
  <div
    class="rn-testimonial-area rn-section-gap section-separator scrollSpysection"
    id="testimonial"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle"
              >Einblick in erfolgreiche Zusammenarbeit</span
            >
            <h2 class="title">Referenzen</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(elm, i) in testimonialRef"
          :key="i"
          :class="['col-lg-6', 'col-md-12', 'col-sm-12']"
        >
          <div class="testimonial-pb mb--30">
            <div class="testimonial mt--50 mt_md--40 mt_sm--40">
              <div class="inner">
                <div
                  class="card-description"
                  :class="{
                    expanded: isLong[i],
                    'card-description--large': elm.description.length > 600,
                  }"
                >
                  <div class="company-logo">
                    <nuxt-img
                      v-if="elm.companySrc.length"
                      :src="elm.companySrc"
                      class="company-image"
                      alt="company-image"
                    />
                    <div
                      class="company-title"
                      v-else="elm.title"
                      v-html="elm.title"
                    />
                  </div>
                  <div class="title-area">
                    <div class="seperator"></div>
                    <!-- <nuxt-img
                      :src="elm.imageSrc"
                      class="testimonial-image"
                      alt="Testimonial-image"
                    /> -->
                    <div class="icon">
                      <i data-feather="user"></i>
                    </div>
                    <div class="title-info">
                      <!-- <h3 class="title">{{ elm.title }}</h3> -->
                      <span class="date">{{ elm.date }}</span>
                    </div>
                  </div>
                  <div class="seperator"></div>
                  <p
                    class="discription"
                    v-html="truncateText(isLong[i], elm.description)"
                  />
                  <a
                    class="read-more"
                    href="#"
                    @click.prevent="toogleIsLong(i)"
                  >
                    {{ !isLong[i] ? "Weiterlesen" : "Weniger" }}
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
import { testimonials1 } from "~/data/testimonials";

const testimonialRef = ref(testimonials1);

const isLong = ref([]);

onMounted(() => {
  testimonialRef.value.forEach(() => {
    isLong.value.push(false);
  });
});

const toogleIsLong = (i) => {
  isLong.value[i] = !isLong.value[i];
};

const truncateText = computed(() => (isLong, text) => {
  return !isLong ? text.substring(0, 255) + "..." : text;
});
</script>

<style lang="scss" scoped></style>
