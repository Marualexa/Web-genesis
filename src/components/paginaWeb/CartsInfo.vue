<template>
  <main class="container-items">
    <div class="container__card">
      <Generic
        v-for="(item, index) in items"
        :key="index"
        :styleCart="item.styleCart"
        :imgCheck="item.imgCheck"
        :information="item.information"
      />
    </div>
    <img class="avion" src="../../assets/avion.png" alt="" />
    <button @click="openForm" type="button" class="btn btn-light">Reserve aquí</button>

  </main>
</template>

<script setup>
import Generic from "./GenericCards.vue";
import imgCheck from "@img/check-green.png";
import { useRouter } from "vue-router";

const router = useRouter();
const items = [
  {
    styleCart: "info__style",
    imgCheck: imgCheck,
    information: "Reservas aéreas",
    
  },
  {
    styleCart: "info__style",
    imgCheck: imgCheck,
    information: "Asesorías viajeras",
  },
  {
    styleCart: "info__style",
    imgCheck: imgCheck,
    information: "Experiencias únicas",
  },
];

function openForm() {
  router.push({ name: "form" });
}
</script>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>