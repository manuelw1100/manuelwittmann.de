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
              <div class="name">Du findest mich auch hier:</div>
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
              <div class="rnt-contact-form rwt-dynamic-form row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-firstname">Vorname*</label>
                    <input class="form-control form-control-lg" name="contact-name" id="contact-firstname" type="text"
                      v-model="firstname" v-bind="firstnameAttrs" />
                    <span class="inpur-error">{{ errors.firstname }}</span>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-familyname">Nachname*</label>
                    <input class="form-control" name="contact-phone" id="contact-familyname" type="text" v-model="name"
                      v-bind="nameAttrs" />
                    <span class="inpur-error">{{ errors.name }}</span>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-email">Email*</label>
                    <input class="form-control form-control-sm" id="contact-email" name="contact-email" type="email"
                      v-model="email" v-bind="emailAttrs" />
                    <span class="inpur-error">{{ errors.email }}</span>
                  </div>
                </div>

                <div class="col-lg-7">
                  <div class="form-group">
                    <label for="subject">Firma</label>
                    <input class="form-control form-control-sm" id="company" name="subject" type="text"
                      v-model="company" v-bind="companytAttrs" />
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="form-group">
                    <label for="contact-phone">Telefon Nummer</label>
                    <input class="form-control" name="contact-phone" id="contact-phone" type="text" v-model="phone"
                      v-bind="phoneAttrs" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-message">Deine Nachricht</label>
                    <textarea name="contact-message" id="contact-message" cols="10" rows="6" v-model="message"
                      v-bind="messageAttrs"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <input class="form-check-input" type="checkbox" id="accept-terms" v-model="accepted"
                      :disabled="send">
                    <label class="form-check-label" for="accept-terms">
                      Ich stimme der Verarbeitung meiner Daten gemäß den
                      <router-link to="/datenschutz#datenerfassung" class="">
                        <span> Datenschutzbestimmungen</span>
                      </router-link>
                      zu.
                    </label>
                  </div>
                </div>

                <div class="col-lg-12">
                  <button v-if="!send" @click="submitForm()" class="rn-btn mt-5"
                    :disabled="isFormInvalid || !accepted || message?.length < 3">
                    <span>Nachricht senden</span>
                    <i data-feather="arrow-right"></i>
                  </button>
                  <div v-if="send && !success" class="form-feedback-text">sende Nachricht...</div>
                  <div v-if="success" class="form-feedback-text form-feedback-text--success" v-html="successText"></div>
                  <div v-if="error" class="form-feedback-text form-feedback-text--error" v-html="errorText"></div>
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
import { socials } from "~/data/socials";
import { useForm } from "vee-validate";
import * as yup from "yup";

const { values, errors, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email("Bitte gib eine gültige E-Mail-Adresse ein").required("Email ist erforderlich"),
    name: yup.string().required("Nachname ist erforderlich"),
    firstname: yup.string().required("Vorname ist erforderlich"),
  })
});

const [email, emailAttrs] = defineField("email");

const [name, nameAttrs] = defineField("name");
const [firstname, firstnameAttrs] = defineField("firstname");

const [company, companytAttrs] = defineField("company");

const [phone, phoneAttrs] = defineField("phone");

const [message, messageAttrs] = defineField("message");

const send = ref(false);
const success = ref(false);
const accepted = ref(false);
const error = ref(false);
const successText =
  "Vielen Dank für deine Nachricht!";
const errorText = "Es ist ein Fehler aufgetreten. Bitte versuche es erneut.";

const isFormInvalid = computed(() => {
  const hasEmailError =
    (errors.value?.email && errors.value?.email.length > 0) ||
    !values.email?.trim();
  const hasNameError =
    (errors.value?.name && errors.value?.name.length > 0) ||
    !values.name?.trim();

  const hasFirstnameError =
    (errors.value?.firstname && errors.value?.firstname.length > 0) ||
    !values.firstname?.trim();

  return hasEmailError || hasNameError || hasFirstnameError;
});




//todo: put values in env file
const submitForm = async () => {
  const portalId = '47718954'
  const formId = 'dbc43b64-5316-40ff-8fdd-8ae2f5fe290f'
  const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  send.value = true;
  error.value = false;

  const payload = {
    fields: [
      { name: 'email', value: values.email },
      { name: 'firstname', value: values.firstname },
      { name: 'lastname', value: values.name },
      { name: 'message', value: values.message },
      { name: 'company', value: values.company || '' },
      { name: 'phone', value: values.phone || '' }
    ]
  }

  try {
    const response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      success.value = true;
    } else {
      error.value = true;
      send.value = false;

    }
  } catch (error) {
    error.value = true;
    send.value = false;
  }

}


//portalId: 47718954, guid: "dbc43b64-5316-40ff-8fdd-8ae2f5fe290f"
</script>

<style lang="scss" scoped>
.social-area .name {
  text-transform: uppercase;
}

.inpur-error {
  color: var(--color-danger);
  font-size: 1.45rem;
  padding-left: 5px;
}

button.rn-btn:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.5;
}

button.rn-btn:disabled:hover {
  background-color: #cccccc;
  color: #666666;
}

.form-group a {
  color: #111;
  text-decoration: underline;

  &:hover {
    color: var(--color-primary);
  }
}

.form-check-input {
  width: 0px;
  height: 0px;
  border: none !important;
}

.form-feedback-text {
  font-size: 1.65rem;
  color: var(--bs-gray-dark);

  &--success {
    color: var(--color-success);
  }

  &--error {
    padding-top: 4px;
    color: var(--color-danger);
  }
}
</style>
