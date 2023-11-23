<script setup>
import ModaIInit from "./Modales/ModaIInit.vue";
import Header from "./paginaWeb/Header.vue";
import CartsInfo from "./paginaWeb/CartsInfo.vue";
import Carrucel from "./paginaWeb/CarrucelTesting.vue";
import IconSocial from "./paginaWeb/IconSocial.vue";
import { ref } from "vue";

const isActive = ref(true);

const callback = () => {
  isActive.value = false;
};
</script>

<template>
  <div class="wrapper">
    <ModaIInit v-if="isActive" @close-modal="callback" />
    <Header />
    <CartsInfo />
    <IconSocial />
    <Carrucel />
  </div>
</template>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>
