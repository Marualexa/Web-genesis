<template>
  <div class="model">
    <v-parallax>
      <v-card
        style="background-color: #ffffff"
        class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h5 style="margin-top: 20px; color: #171926">Datos de viajes</h5>
        <v-card-text class="subheading" style="margin: 20px; background-color: #ffffff">
          <p style="text-align: justify">Ciudad de origen: {{ user.ciudadOrigen }}</p>
          <p style="text-align: justify">Ciudad de destino: {{ user.ciudadDestino }}</p>
          <p style="text-align: justify">Tipo de viaje: {{ user.tipoViaje }}</p>
          <p style="text-align: justify">Fecha de salida: {{ user.fechaSalida }}</p>
          <p style="text-align: justify">Fecha de regreso: {{ user.fechaRegreso }}</p>
          <p style="text-align: justify">
            Información de cotización: {{ user.recibirCotizacion }}
          </p>
        </v-card-text>
        <v-card-actions
          style="background-color: #ffffff; display: flex; justify-content: end"
        >
          <v-btn @click="$emit('closetModel')"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-parallax>
  </div>
</template>

<script setup>
import { defineProps, watch, toRefs, reactive } from "vue";
import { useAsync } from "../../hooks/useAsync";

const { result, makeRequest } = useAsync();

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
});

const datosPerson = async (id) => {
  await makeRequest(`userRegist/${id}`);
  console.log("resultado", result.value);
  user.ciudadOrigen = result.value.ciudadOrigen;
  user.ciudadDestino = result.value.ciudadDestin;
  user.tipoViaje = result.value.tipoViaje;
  user.fechaSalida = result.value.fechaSalida;
  user.fechaRegreso = result.value.fechaRegreso;
  user.recibirCotizacion = result.value.recibirCotizacion;
};

watch(updateOfId, (newValue, oldValue) => {
  datosPerson(newValue);
});
</script>
