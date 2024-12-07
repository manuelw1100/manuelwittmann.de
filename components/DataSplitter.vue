<template>
  <span class="prevent-copy" v-for="(digit, index) in splitData" :key="index">{{
    digit
    }}</span>
</template>
<script setup lang="ts">
const props = defineProps({
  data: String,
});
const splitData = computed(() => (props.data ? props.data.split("") : []));
</script>
<style scoped>
.prevent-copy {
  display: inline-block;
  user-select: none;
}
</style>
