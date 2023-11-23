<template>
  <div class="modal-conditional">
    <v-card
      class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
    >
      <v-card-text class="subheading">
        <p style="text-align: center; font-size: 20px">Términos y condiciones para cotizar</p>
        <p style="color: black">
          
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('acceptTerms')">Acepto condiciones</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

let data = ref({ conditional: false });
let showModal = ref(true);

const agreeWithTerms = () => {
  // Tu lógica aquí
  showModal.value = false;
};
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
