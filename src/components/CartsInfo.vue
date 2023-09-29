<template>
  <main class="container-items">
    <!-- <img class="avion" src="../assets/avion.png" alt="" /> -->
    <div class="container__item">
      <h5>Contenido viajero, mucha conexión y diversión</h5>
    </div>
    <div class="container__card">
      <Generic
        v-for="(item, index) in items"
        :key="index"
        :styleCart="item.styleCart"
        :imgCheck="item.imgCheck"
        :information="item.information"
      />
    </div>
  </main>
</template>

<script setup>
import Generic from "./GenericCards.vue";
import imgCheck from "../assets/check-green.png";

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
</script>
