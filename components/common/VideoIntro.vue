<template>
  <div v-if="!hidden" class="rbt-intro-video-card-wrapper position-right">
    <div class="rbt-video-inner">
      <div class="rbt-video-progress-container playing">
        <video
          controls
          autoplay
          muted
          class="rbt-video-element"
          id="rbt-video-element"
          poster="/assets/images/insto-video-start-f.jpg"
        >
          <source src="/assets/videos/intro-video-rbt.mp4" />
        </video>
      </div>
      <div class="card-greeting"><p>Hello</p></div>
    </div>
    <div @click="hidden = true" class="rbt-iv-close-button">
      <i class="feather-x"></i>
    </div>
  </div>
</template>

<script setup>
const hidden = ref(false);
</script>

<style lang="scss" scoped></style>
