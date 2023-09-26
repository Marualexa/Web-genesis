<template>
  <div :class="styleCart">
    <img :src="imgCheck" alt="" />
    <p>{{ information }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const itemsProyect = defineProps({
  styleCart: {
    type: String,
  },
  imgCheck: {
    type: String,
  },
  information: {
    type: String,
  },
});
</script>
