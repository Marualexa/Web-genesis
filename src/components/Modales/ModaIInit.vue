<template>
  <div class="model">
    <v-parallax>
      <v-card
        class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
      >
        <v-card-text class="subheading" style="margin: 20px;">
          <p style="text-align: center; font-size: 20px">¡Hola viajero!</p>
          <p style="text-align: center">Cotiza tu viaje</p>
          <p>
            Solo debes registrar tus datos, haz clic en el botón de cotiza, te garantizo
            una experiencia viajera increíble 👍.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="openForm">Cotiza</v-btn>
          <v-btn @click="$emit('closeModal')">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-parallax>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function openForm() {
  router.push({ name: "form" });
}
</script>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>
