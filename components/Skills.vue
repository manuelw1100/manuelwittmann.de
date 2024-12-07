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
            <span class="subtitle">Hauptwerkzeuge für Ihr Projekt </span>
            <h2 class="title">Meine Tools</h2>
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
                <nuxt-img :src="elm.src" alt="skill" width="140" height="50" />
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
</script>

<style lang="scss" scoped></style>
