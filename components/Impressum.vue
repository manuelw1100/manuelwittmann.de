<template>
  <div class="data-wrapper">
    <p class="discription">
      Manuel Wittmann<br />
      Zu den Kikenfuhren 9<br />
      38518 Gifhorn
    </p>

    <h2 class="h3 mt--40">Kontakt</h2>
    <p class="discription">
      Telefon: 📞<DataSplitter :data="rc.public.phone" />
      <br />
      E-Mail: ✉️<DataSplitter :data="rc.public.email" />
    </p>

    <!-- <h3 class="mt--50">Bildnachweise</h3>
    <p class="discription">
      Kontaktpage: ©
      <a href="https://de.123rf.com/profile_captainvector">captainvector</a>,
      <a href="https://www.123rf.com/free-images/">123RF Free Images</a>
    </p> -->

    <p class="discription mt--40">
      Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
    </p>
  </div>
</template>
<script setup lang="ts">
const rc = useRuntimeConfig();
</script>
<style scoped>
h2,
h3 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-body-white);
  margin-top: 15px;
  margin-bottom: 0;
}

a {
  color: var(--color-primary);
}
</style>
