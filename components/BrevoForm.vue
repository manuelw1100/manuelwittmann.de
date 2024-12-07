<template>
    <div class="sib-form text-center bg-gray-400">
        <div id="sib-form-container" class="sib-form-container">
            <!-- Error Message -->
            <div id="error-message" class="sib-form-message-panel" v-if="error" style="max-width: 540px">
                <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                    <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                        <path
                            d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                    </svg>
                    <span class="sib-form-message-panel__inner-text">
                        Fehler beim Absenden der Nachricht. Bitte versuche es erneut.
                    </span>
                </div>
            </div>
            <!-- Success Message -->
            <div id="success-message" class="sib-form-message-panel" v-if="success" style="max-width: 540px">
                <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                    <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                        <path
                            d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                    </svg>
                    <span class="sib-form-message-panel__inner-text">
                        Vielen Dank für deine Nachricht
                    </span>
                </div>
            </div>
            <!-- Form -->
            <div id="sib-container"
                class="sib-container--large sib-container--vertical bg-gray-200 max-w-lg border border-gray-300 rounded">
                <form id="sib-form" method="POST"
                    action="https://ffb4a7fa.sibforms.com/serve/MUIFAJuU2pN-zU0D1br50brDgx5n-0H2yd4z9XA5a6VQdUWGC_fa_7RZxWjC_Q26c8OSTDgLdjO-EyU8Mhuag60DyUhwvt_K-HhyHWeUIt2unyYxxmUSYFxjVqhBrSVRu43_W3bItMv0E8TiT0roU_0aVmZWeClCLcEnMZ3UhmR6rgqqbZNLqAqXM-7ukchTJXu0qL7t2p2gieDD"
                    @submit.prevent="handleSubmit">
                    <FormField id="VORNAME" label="VORNAME" placeholder="VORNAME" required />
                    <FormField id="NACHNAME" label="NACHNAME" placeholder="NACHNAME" required />
                    <FormField id="EMAIL" label="E-Mail-Adresse" placeholder="EMAIL" required type="email" />
                    <FormField id="NACHRICHT" label="Deine NACHRICHT" placeholder="NACHRICHT" required isTextArea />

                    <div class="my-4 text-left">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="OPT_IN" name="OPT_IN" v-model="optIn" />
                            <span>Ich akzeptiere die Datenschutzerklärung.</span>
                        </label>
                    </div>

                    <button type="submit" class="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg">
                        Nachricht senden
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const success = ref(false);
const error = ref(false);
const optIn = ref(false);

function handleSubmit() {
    // handle form submission here, and set `success` or `error` based on the response
}
</script>

<style scoped>
@font-face {
    font-family: "Roboto";
    font-display: block;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"),
        url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff");
}

/* Additional font-face styles can be added similarly */

.sib-form-message-panel {
    font-size: 16px;
    text-align: left;
    font-family: Helvetica, sans-serif;
    padding: 8px;
}

.sib-form-message-panel__inner-text {
    font-size: 16px;
}

.input {
    @apply block w-full p-2 border border-gray-300 rounded;
}

input[type="checkbox"]+span {
    font-size: 14px;
}
</style>