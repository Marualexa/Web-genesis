<template>
  <div class="model">
    <v-card
      class="modal__container d-flex flex-column fill-height justify-center text-white" style="text-align: center"
    >
      <v-card-text class="subheading" style="margin-top: 80px; padding: 30px;">
        <p>
          Tu registro se ha completado exitosamente, en las próximas horas nos
          comunicaremos contigo.
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="openForm" style="margin-right: 17px;">Aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function openForm() {
  router.push({ name: "ImportApp" });
}
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>