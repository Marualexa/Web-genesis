<template>
  <ProgressCircular v-if="isLoading && !errorData" />
  <ModelError v-if="errorData && !isLoading" />
  <div class="model-user">
    <v-card
      class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h5 style="margin-top: 40px; color: #171926">Datos de viajes</h5>
      <v-card-text class="subheading" style="margin: 20px; background-color: #ffffff">
        <p style="text-align: justify">Ciudad de origen: {{ user.ciudadOrigen }}</p>
        <p style="text-align: justify">Ciudad de destino: {{ user.ciudadDestino }}</p>
        <p style="text-align: justify">Tipo de viaje: {{ user.tipoViaje }}</p>
        <p style="text-align: justify">Fecha de salida: {{ user.fechaSalida }}</p>
        <p style="text-align: justify">Fecha de regreso: {{ user.fechaRegreso }}</p>
        <p style="text-align: justify">
          Información de cotización: {{ user.recibirCotizacion }}
        </p>
        <p style="text-align: justify">Número Telefónico: {{ user.numeroTelefonico }}</p>
        <v-card-actions
          style="background-color: #ffffff; display: flex; margin-right: 27px; justify-content: end"
        >
          <v-btn @click="$emit('closetModel')">Cerrar</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { defineProps, watch, toRefs, reactive } from "vue";
import { useAsync } from "../../hooks/useAsync";
import ProgressCircular from "../Modales/ProgressCircular.vue";
import ModelError from "../Modales/ModelError.vue";

const { result, makeRequest, errorData, isLoading } = useAsync();

const props = defineProps({
  updateOfId: {
    type: Number,
  },
});

const { updateOfId } = toRefs(props);

const user = reactive({
  ciudadOrigen: "",
  ciudadDestino: "",
  tipoViaje: "",
  fechaSalida: "",
  fechaRegreso: "",
  recibirCotizacion: "",
  numeroTelefonico: "",
});

const datosPerson = async (id) => {
  await makeRequest(`userRegist/${id}`);
  user.ciudadOrigen = result.value.ciudadOrigen;
  user.ciudadDestino = result.value.ciudadDestin;
  user.tipoViaje = result.value.tipoViaje;
  user.fechaSalida = result.value.fechaSalida;
  user.fechaRegreso = result.value.fechaRegreso;
  user.recibirCotizacion = result.value.recibirCotizacion;
  user.numeroTelefonico = result.value.numeroTelefonico;
};

watch(updateOfId, (newValue, oldValue) => {
  datosPerson(newValue);
});
</script>
