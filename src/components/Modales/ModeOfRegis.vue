<template>
  <div class="model">
    <v-parallax>
      <v-card
        class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
      >
        <v-card-text class="subheading" style="margin-top: 20px">
          <p>
            Tu registro se ha completado exitosamente, en las próximas horas nos
            comunicaremos contigo.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="openForm">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-parallax>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function homeItem() {
  router.push({ name: "ImportApp" });
}
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
