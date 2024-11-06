<template>
  <div class="rn-contact-area rn-section-gap section-separator scrollSpysection mw-100" id="contacts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Fragen? Interesse?</span>
            <h2 class="title">Schreibe mir</h2>
          </div>
        </div>
      </div>

      <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
        <div class="col-lg-5">
          <div class="contact-about-area">
            <div class="thumbnail">
              <nuxt-img src="/assets/images/contact/contact.jpg" alt="contact-img" />
            </div>
            <!-- <div class="title-area">
              <h4 class="title">Manuel Wittmann</h4>
            </div> -->
            <div class="description jhg">
              <p>
                Hier kannst du mit mir in Kontakt treten. Ich freue mich über dein Interesse und stehe gerne zur
                Verfügung.
              </p>
              <p>
                Schreibe mir einfach, um deine Anliegen, Fragen oder Projektideen zu besprechen.
                Ich bemühe mich, dir so schnell wie möglich zu antworten.
              </p>

            </div>
            <div class="social-area">
              <div class="name">Ich bin auch hier:</div>
              <div class="social-icone">
                <a v-for="(elm, i) in socials.slice(0, 3)" :key="i" :href="elm.link" target="_blank"><i
                    :data-feather="elm.icon"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-delay="600" class="col-lg-7 contact-input">
          <div class="contact-form-wrapper">
            <div class="introduce">
              <form class="rnt-contact-form rwt-dynamic-form row" @submit.prevent="">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-name">Dein Name</label>
                    <input class="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-phone">Telefon Nummer</label>
                    <input class="form-control" name="contact-phone" id="contact-phone" type="text" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-email">Email</label>
                    <input class="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="subject">Firma</label>
                    <input class="form-control form-control-sm" id="company" name="subject" type="text" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-message">Deine Nachricht</label>
                    <textarea name="contact-message" id="contact-message" cols="10" rows="10"></textarea>
                  </div>
                </div>

                <div class="col-lg-12">
                  <button name="submit" type="submit" id="submit" class="rn-btn">
                    <span>Nachricht senden</span>
                    <i data-feather="arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { socials } from "~/data/socials";
</script>

<style lang="scss" scoped>
.social-area .name {
  text-transform: uppercase;
}
</style>
