<template>
  <div class="rn-right-demo">
    <button class="demo-button">
      <span class="text">40+ Demos</span>
    </button>
  </div>
</template>

<script setup>
onMounted(() => {
  document
    .querySelector(".rn-right-demo")
    .addEventListener("click", function (e) {
      document.querySelector(".demo-modal-area").classList.add("open");
    });
});
watch(
  () => useRoute().path,
  () => {
    document.querySelector(".demo-modal-area").classList.remove("open");
  }
);
</script>

<style lang="scss" scoped></style>
