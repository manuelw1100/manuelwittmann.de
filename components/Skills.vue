<template>
  <div
    id="skill"
    class="rn-skill-area rn-section-gap section-separator scrollSpysection"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="section-title text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span class="subtitle">Meine Methode:</span>
            <h2 class="title">SmartFlow -<br />mit Strategie zum Erfolg</h2>
            <p class="description">
              SmartFlow ist meine Methode, die Strategie und Tools vereint. Sie
              verbindet klare Schritte mit modernen Technologien. So entsteht
              ein strukturierter, effizienter Weg von der Analyse bis zu einer
              erfolgreichen Lösung.
            </p>
          </div>
          <div class="row mt--10">
            <div class="col-12 mt_experience">
              <!-- single skills -->
              <div
                v-for="(elm, i) in experience"
                :key="i"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
                class="experience-style-two"
              >
                <div class="experience-left">
                  <div class="experience-image">
                    <span class="experience-step"> # {{ elm.id }} </span>
                  </div>
                  <div class="experience-center">
                    <span class="date">{{ elm.date }}</span>
                    <h4 class="experience-title">{{ elm.title }}</h4>
                    <h6 class="subtitle" v-if="false">{{ elm.subtitle }}</h6>
                    <p class="disc">{{ elm.disc }}</p>
                  </div>
                </div>
                <div class="experience-right">
                  <div class="experience-footer"></div>
                </div>
              </div>
              <!-- single skills -->
            </div>
          </div>

          <div class="section-title text-center mt-5">
            <span class="subtitle pt-5">Zusatzleistungen</span>
            <p class="description pt-1 pb-5">
              Auf Wunsch übernehme ich auch die Wartung und Weiterentwicklung.
            </p>
            <span class="subtitle pt-5">Meine Tools:</span>
          </div>

          <div class="mt_md--40 mt_sm--40">
            <ul class="skill-style-1">
              <li
                v-for="(elm, i) in skills"
                :key="i"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
                :title="elm.title"
              >
                <nuxt-img :src="elm.src" alt="skill" width="110" height="38" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { skills } from "~/data/skills";
import { experience } from "~/data/experience";
</script>

<style lang="scss" scoped></style>
