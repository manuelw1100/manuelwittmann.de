<template>
  <div class="rn-resume-area rn-section-gap section-separator scrollSpysection mw-100" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Referenzprojekte</span>
            <h2 class="title">Projekte</h2>
          </div>
        </div>
      </div>
      <div class="row mt--45">
        <div class="col-lg-12">


          <!-- Start Tab Content Wrapper  -->
          <div class="rn-nav-content tab-content" id="myTabContents">
            <!-- Start Single Tab  -->
            <div class="tab-pane show active fade single-tab-area" id="education" role="tabpanel"
              aria-labelledby="education-tab">
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <!-- Start Skill List Area  -->
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="content">
                      <!-- <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Education Quality</h4> -->
                      <div class="experience-list">
                        <!-- Start Single List  -->
                        <div v-for="(elm, i) in educattionRef_1" :key="i" class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h3>{{ elm.title }}</h3>
                                <span>{{ elm.institution }}</span>
                              </div>
                              <!-- <div class="date-of-time">
                                <span>{{ elm.rating }}</span>
                              </div> -->
                            </div>
                            <p class="description">
                              {{ !elm.longDesription ? elm.description.substring(0, 200) + '...' : elm.description }}
                            </p>
                            <a class="read-more" href="#" @click.prevent="toggleDescription1(i)">
                              {{ !elm.longDesription ? 'Weiterlesen' : 'Weniger' }}
                            </a>
                          </div>
                        </div>
                        <!-- End Single List  -->

                        <!-- End Single List  -->
                      </div>
                    </div>
                  </div>
                  <!-- End Skill List Area  -->

                  <!-- Start Skill List Area 2nd  -->
                  <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                    <div class="content">
                      <!-- <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Job Experience</h4> -->
                      <div class="experience-list">
                        <!-- Start Single List  -->
                        <div v-for="(elm, i) in educattionRef_2" :key="i" class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h3>{{ elm.title }}</h3>
                                <span>{{ elm.institution }}</span>
                              </div>
                              <!-- <div class="date-of-time">
                                <span>{{ elm.rating }}</span>
                              </div> -->
                            </div>
                            <p class="description">
                              {{ !elm.longDesription ? elm.description.substring(0, 200) + '...' : elm.description }}
                            </p>
                            <a class="read-more" href="#" @click.prevent="toggleDescription2(i)">
                              {{ !elm.longDesription ? 'Weiterlesen' : 'Weniger' }}
                            </a>
                          </div>
                        </div>
                        <!-- End Single List  -->
                      </div>
                    </div>
                  </div>
                  <!-- End Skill List Area  -->
                </div>
              </div>
            </div>
            <!-- End Single Tab  -->






          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { education2, education3 } from "~/data/education";

const educattionRef_1 = ref(education2);
const educattionRef_2 = ref(education3);

const toggleDescription1 = (index) => {
  educattionRef_1.value[index].longDesription = !educattionRef_1.value[index].longDesription;
};

const toggleDescription2 = (index) => {
  educattionRef_2.value[index].longDesription = !educattionRef_2.value[index].longDesription;
};
</script>

<style lang="scss" scoped>
.read-more {
  color: var(--color-midgray);
  cursor: pointer;
}

.description {
  margin: 0 0 20px;
}

.experience-list:hover {
  .read-more {
    color: var(--color-light);
  }
}
</style>
