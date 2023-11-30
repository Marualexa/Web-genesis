<template>
  <div class="model-user">
    <v-card
      class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h5>Datos de viajes</h5>
      <v-card-text class="subheading" style="margin: 20px; background-color: #ffffff">
        <p style="text-align: justify">
          Nombre y apellido: {{ approvedQuot.nombreApellido }}
        </p>
        <p style="text-align: justify">
          Ciudad de origen: {{ approvedQuot.ciudadOrigen }}
        </p>
        <p style="text-align: justify">
          Ciudad de destino: {{ approvedQuot.ciudadDestino }}
        </p>
        <p style="text-align: justify">Tipo de viaje: {{ approvedQuot.tipoViaje }}</p>
        <p style="text-align: justify">Fecha de salida: {{ approvedQuot.fechaSalida }}</p>
        <p style="text-align: justify">
          Fecha de regreso: {{ approvedQuot.fechaRegreso }}
        </p>
        <p style="text-align: justify">
          Información de cotización: {{ approvedQuot.recibirCotizacion }}
        </p>
        <p style="text-align: justify">
          Número Telefónico: {{ approvedQuot.numeroTelefonico }}
        </p>
        <v-card-actions
          style="
            background-color: #ffffff;
            display: flex;
            margin-right: 27px;
            justify-content: end;
          "
        >
          <v-btn @click="$emit('closetModel')">Cerrar</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../../store/cartContainer";

const store = useCartStore();

const approvedQuot = computed(() => store.getCurrentPrice);
</script>
