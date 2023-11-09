<template>
  <div class="input">
    <div class="mb-3 input-search">
      <label for="formGroupExampleInput" class="form-label">Nombre y Apellido</label>
      <input
        type="text"
        v-model="filters.nameUser"
        class="input-search"
        style="border: 1px solid;"
        id="formGroupExampleInput"
      />
    </div>
    <div class="mb-3 number-phone">
      <label for="formGroupExampleInput2" class="form-label">Número telefónico</label>
      <input type="text" style="border: 1px solid;" v-model="filters.number" class="input-search" />
    </div>

    <div class="mb-3 detail">
      <label for="formGroupExampleInput2" class="form-label">Detalle de vuelo</label>
      <input style="border: 1px solid;" v-model="filters.flightDetail" class="input-search" />
    </div>

    <div class="col-md-6 select-viaje">
      <label for="tipoViaje" class="form-label">Selecciona tipo de viaje</label>
      <select id="tipoViaje" style="border: 1px solid;" class="input-search" v-model="filters.tipoViaje">
        <option>Viaje de ida</option>
        <option>Viaje de ida y vuelta</option>
      </select>
    </div>

    <div
      id="contenedorFechas"
      class="row date"
      style="margin-top: 20px"
      v-if="filters.tipoViaje === 'Viaje de ida y vuelta'"
    >
      <div class="col-md-6">
        <label for="fechaSalida" class="form-label">FECHA DE SALIDA</label>
        <input
          type="date"
          class="form-control"
          style="border: 1px solid;"
          id="fechaSalida"
          v-model="filters.fechaSalida"
        />
      </div>

      <div class="col-md-6">
        <label for="fechaRegreso" class="form-label">FECHA DE REGRESO</label>
        <input
          type="date"
          class="form-control"
          style="border: 1px solid;"
          id="fechaRegreso"
          v-model="filters.fechaRegreso"
        />
      </div>
    </div>

    <button type="button" @click="searchFilt" class="btn btn-info">Buscar</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const filters = reactive({
  nameUser: "",
  number: "",
  flightDetail: "",
  tipoViaje: "Viaje de ida",
  fechaSalida: "",
  fechaRegreso: ""
});
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
