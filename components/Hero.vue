<template>
  <div id="home" class="rn-slider-area hero scrollSpysection">
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
                  <span>Weblösungen</span> die dich schneller machen<br />
                </h1>

                <div>
                  <p class="description">
                    Für Automotive & Smart Energy – modern, skalierbar,
                    intuitiv.<br />Über 12 Jahre Erfahrung aus der Praxis.
                  </p>
                  <a
                    href="https://meet.brevo.com/manuel-wittmann/30-minutiges-meeting"
                    target="_blank"
                    class="rn-btn btn-theme mt-5"
                  >
                    <span>Unverbindlich kennenlernen</span>
                    <i data-feather="arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="order-2 order-lg-2 col-lg-5">
            <div class="thumbnail">
              <div class="inner">
                <div class="image-wrapper">
                  <!-- Blur Placeholder -->
                  <div
                    class="blur-placeholder"
                    :class="{ 'blur-hidden': imageLoaded }"
                    :style="{
                      backgroundImage: `url(${blurDataURL})`,
                    }"
                  />

                  <!-- Main Image -->
                  <nuxt-img
                    class="main-image"
                    :class="{ 'image-loaded': imageLoaded }"
                    :width="620"
                    :height="860"
                    src="/assets/images/about/ich_mit_pc.webp"
                    alt="Bild von mir mit Laptop"
                    sizes="(max-width: 576px) 100vw, (max-width: 768px) 100vw, (max-width: 992px) 70vw, 70vw"
                    srcset="
        /assets/images/about/ich_mit_pc_xs.webp 240w,
        /assets/images/about/ich_mit_pc_s.webp 320w,
        /assets/images/about/ich_mit_pc_m.webp 480w,
        /assets/images/about/ich_mit_pc.webp 620w
      "
                    @load="imageLoaded = true"
                    loading="eager"
                    fetchpriority="high"
                  />
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
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/assets/images/about/ich_mit_pc.webp",
    },
    {
      rel: "preload",
      as: "image",
      href: "/assets/images/about/ich_mit_pc_m.webp",
    },
  ],
});

const imageLoaded = ref(false);
const blurDataURL =
  "data:image/webp;base64,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";
</script>

<style lang="scss" scoped></style>
