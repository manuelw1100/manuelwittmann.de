<template>
  <div class="rn-service-area rn-section-gap-x py-5 section-separator scrollSpysection" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span class="subtitle">Vertrauensvoll gearbeitet für:</span>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <!-- 3 columns centered with logos-->
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="logo-item">
            <img src="/public/assets/images/logo/mb.webp" alt="Kunden Logo 1" class="img-fluid logo-img"
              style="transform: scale(var(--logo-scale, 3.3));">
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="logo-item">
            <img src="/public/assets/images/logo/vw.png" alt="Kunden Logo 2" class="img-fluid logo-img"
              style="transform: scale(var(--logo-scale, 0.9));">
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center middle-element">
          <div class="logo-item">
            <img src="/public/assets/images/logo/logo-iav.svg" alt="Kunden Logo 3" class="img-fluid logo-img"
              style="transform: scale(var(--logo-scale, 1.8));">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
}

.logo-item:hover .logo-img {
  transform: scale(1.1);
}
</style>
