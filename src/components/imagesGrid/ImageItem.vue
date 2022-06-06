<template>
  <div>
    <img :src="image.src" :alt="image.alt || ''" :style="{objectFit, width: '100%', height: '100%'}">
  </div>
</template>

<script setup lang="ts">

import {ImageItemProps} from "./types";

const {image, objectFit} = defineProps<ImageItemProps>()

</script>

<style scoped>

</style>
