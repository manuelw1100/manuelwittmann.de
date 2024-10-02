<template>
  <div class="demo-modal-area">
    <div class="wrapper">
      <div class="rn-modal-inner">
        <div class="close-icon">
          <button @click="closeDemoPopup" class="demo-close-btn">
            <span class="feather-x"></span>
          </button>
        </div>
        <div class="demo-top text-center">
          <h4 class="title">InBio</h4>
          <p class="subtitle">
            Its a personal portfolio template. You can built any personal
            website easily.
          </p>
          <div class="move-feature-area mb--30">
            <div class="wrapper">
              <ul class="mv-feature-list scroll-animation scroll-right-left">
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Drag &amp; Drop Editor</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Responsive &amp; Retina</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">SEO Optimized</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">30+ Custom Elements</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">It’s Super Fast</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">One-click Demo Import</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">High Quality Support</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Fully Customizable</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Easy Lifetime Update</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Google Font</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Unlimited Colors</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Mobile-first design</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Big Template For Personal Portfolio</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">Cross-browser compatible</div>
                </li>
                <li class="mv-feature">
                  <div class="icon"><i class="feather-check"></i></div>
                  <div class="text">One Page &amp; Multipage Option</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="popuptab-area nav nav-tabs" id="popuptab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active demo-dark"
              id="demodark-tab"
              data-bs-toggle="tab"
              href="#demodark"
              role="tab"
              aria-controls="demodark"
              aria-selected="true"
              >Dark Demo</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link demo-light"
              id="demolight-tab"
              data-bs-toggle="tab"
              href="#demolight"
              role="tab"
              aria-controls="demolight"
              aria-selected="false"
              >Light Demo</a
            >
          </li>
        </ul>
        <div class="tab-content" id="popuptabContent">
          <div
            class="tab-pane show active"
            id="demodark"
            role="tabpanel"
            aria-labelledby="demodark-tab"
          >
            <div class="content">
              <div class="row">
                <!-- Start Single Content  -->
                <div
                  v-for="(elm, i) in homes"
                  :key="i"
                  class="col-lg-4 col-md-6 col-12"
                >
                  <div class="single-demo">
                    <div
                      :class="`inner badge-${
                        elm.badge == 'trending'
                          ? 1
                          : elm.badge == 'new'
                          ? 2
                          : ''
                      }`"
                    >
                      <div class="thumbnail">
                        <nuxt-link :to="elm.link">
                          <nuxt-img
                            class="w-100"
                            :src="elm.imageUrl"
                            alt="Personal Portfolio"
                          />
                          <span class="overlay-content">
                            <span class="overlay-text"
                              >View Demo <i class="feather-external-link"></i
                            ></span>
                          </span>
                        </nuxt-link>
                      </div>
                      <div class="inner">
                        <h3 class="title">
                          <nuxt-link :to="elm.link">{{ elm.title }}</nuxt-link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Single Content  -->
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            id="demolight"
            role="tabpanel"
            aria-labelledby="demolight-tab"
          >
            <div class="content">
              <div class="row">
                <!-- Start Single Content  -->
                <div
                  v-for="(elm, i) in homesWhite"
                  :key="i"
                  class="col-lg-4 col-md-6 col-12"
                >
                  <div class="single-demo">
                    <div
                      :class="`inner badge-${
                        elm.badge == 'trending'
                          ? 1
                          : elm.badge == 'new'
                          ? 2
                          : ''
                      }`"
                    >
                      <div class="thumbnail">
                        <nuxt-link :to="elm.link">
                          <nuxt-img
                            class="w-100"
                            :src="elm.imageUrl"
                            alt="Personal Portfolio"
                          />
                          <span class="overlay-content">
                            <span class="overlay-text"
                              >View Demo <i class="feather-external-link"></i
                            ></span>
                          </span>
                        </nuxt-link>
                      </div>
                      <div class="inner">
                        <h3 class="title">
                          <nuxt-link :to="elm.link">{{ elm.title }}</nuxt-link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Single Content  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { homes, homesWhite } from "~/data/menu";
onMounted(() => {
  document
    .querySelectorAll(".popuptab-area li a.demo-dark")
    .forEach(function (item) {
      item.addEventListener("click", function (e) {
        document
          .querySelector(".demo-modal-area")
          .classList.add("dark-version");
        document
          .querySelector(".demo-modal-area")
          .classList.remove("white-version");
      });
    });

  document
    .querySelectorAll(".popuptab-area li a.demo-light")
    .forEach(function (item) {
      item.addEventListener("click", function (e) {
        document
          .querySelector(".demo-modal-area")
          .classList.remove("dark-version");
        document
          .querySelector(".demo-modal-area")
          .classList.add("white-version");
      });
    });
});
const closeDemoPopup = () => {
  document.querySelector(".demo-modal-area").classList.remove("open");
};
watch(
  () => useRoute().path,
  () => {
    closeDemoPopup();
  }
);
</script>

<style lang="scss" scoped></style>
