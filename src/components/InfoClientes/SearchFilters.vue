<template>
  <div class="input">
    <div class="col-md-6 input-search">
      <label for="formGroupExampleInput" class="form-label">Nombre y Apellido</label>
      <input
        type="text"
        v-model="filters.nombreApellido"
        :class="{ 'is-invalid': hasError('nombreApellido') }"
        class="input-search"
        style="border: 1px solid"
        id="formGroupExampleInput"
      />
      <div v-if="hasError('nombreApellido')" class="invalid-feedback">
        {{ errorObject.errorMessage }}
      </div>
    </div>

    <div class="col-md-6 number-phone">
      <label for="formGroupExampleInput2" class="form-label">Fecha y Hora de solicitud</label>
      <input
        type="date"
        style="border: 1px solid"
        v-model="filters.DateTransaction"
        :class="{ 'is-invalid': hasError('DateTransaction') }"
        class="input-search"
      />
      <div v-if="hasError('DateTransaction')" class="invalid-feedback">
        {{ errorObject.errorMessage }}
      </div>
    </div>

    <div class="col-md-6 detail">
      <label for="recibirCotizacion" class="form-label">Información de cotización</label>
      <select
        id="recibirCotizacion"
        class="form-select"
        v-model="filters.recibirCotizacion"
        :class="{ 'is-invalid': hasError('recibirCotizacion') }"
      >
        <option>WhatsApp</option>
        <option>Correo Electrónico</option>
      </select>
      <div v-if="hasError('recibirCotizacion')" class="invalid-feedback">
        {{ errorObject.errorMessage }}
      </div>
    </div>

    <div class="col-md-6 select-viaje">
      <label for="recibirCotizacion" class="form-label">Selecciona tipo de viaje</label>
      <select
        id="recibirCotizacion"
        class="form-select"
        v-model="filters.tipoViaje"
        :class="{ 'is-invalid': hasError('tipoViaje') }"
      >
        <option selected>Viaje de ida</option>
        <option>Viaje de ida y vuelta</option>
      </select>
      <div v-if="hasError('tipoViaje')" class="invalid-feedback">
        {{ errorObject.errorMessage }}
      </div>
    </div>

    <div
      id="contenedorFechas"
      class="row date"
      v-if="filters.tipoViaje === 'Viaje de ida y vuelta'"
    >
      <div class="col-md-6">
        <label for="fechaSalida" class="form-label">FECHA DE SALIDA</label>
        <input
          type="date"
          class="form-control"
          style="border: 1px solid"
          id="fechaSalida"
          v-model="filters.fechaSalida"
          :class="{ 'is-invalid': hasError('fechaSalida') }"
        />
        <div v-if="hasError('fechaSalida')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="col-md-6">
        <label for="fechaRegreso" class="form-label">FECHA DE REGRESO</label>
        <input
          type="date"
          class="form-control"
          style="border: 1px solid"
          id="fechaRegreso"
          v-model="filters.fechaRegreso"
          :class="{ 'is-invalid': hasError('fechaRegreso') }"
        />
        <div v-if="hasError('fechaRegreso')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>
    </div>

    <button type="button" @click="searchFilt" class="btn btn-info">Buscar</button>
  </div>
</template>

<script setup>
import { reactive, computed, defineEmits } from "vue";
import { Joi } from "vue-joi-validation";

const emit = defineEmits();

const filters = reactive({
  nombreApellido: "",
  DateTransaction: "",
  recibirCotizacion: "WhatsApp",
  tipoViaje: "Viaje de ida",
  fechaSalida: null,
  fechaRegreso: null,
});

const validateItems = {
  nombreApellido: Joi.string().optional().allow(""),
  DateTransaction: Joi.date().iso().optional().allow(null),
  recibirCotizacion: Joi.string().valid("WhatsApp", "Correo Electrónico").optional().allow(""),
  tipoViaje: Joi.string().valid("Viaje de ida", "Viaje de ida y vuelta").optional().allow(""),
  fechaSalida: Joi.date().iso().optional().allow(null),
  fechaRegreso: Joi.date().iso().optional().allow(null),
};

const errorObject = reactive({
  errorName: "",
  errorMessage: "",
});

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

function searchFilt() {
  const resultFrom = Joi.validate(filters, validateItems, async (err, value) => {
    if (err) {
      let starForm = err.message;
      let starIndex = starForm.indexOf("[") + 1;
      let endIndex = starForm.indexOf("]");
      let element = starForm.substring(starIndex, endIndex);

      let cadena2 = element;

      const string = cadena2.slice(1);
      const string2 = string.indexOf('"');
      const final = string.slice(0, string2);
      let messageIndix = string.slice(string2 + 1);

      errorObject.errorName = final;
      errorObject.errorMessage = final + " " + messageIndix;
    } else {
      console.log("Que llega", filters)
      emit("valiSuccessful", filters);
    }
  });
}
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
