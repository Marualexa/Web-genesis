<template>
  <ProgressCircular v-if="loadModule && !errorData" />
  <ModelError v-if="errorData && !loadModule" />
  <ModeOfRegis v-if="exictReg && !errorData" />
  <Conditional v-if="showModal" @accept-terms="itemsCloset" />
  <header class="arrow">
    <img
      @click="closetForm"
      class="arrow__leth"
      src="../../assets/flecha-left.svg"
      alt="atras"
    />
    <img class="logo" src="../../assets/logo.png" alt="" />
  </header>

  <div class="container-add">
    <p style="font-size: 18px; text-align: center">Formulario de cotización</p>

    <form @submit.prevent="createButton" class="row g-3" style="padding: 15px">
      <p style="font-size: 16px">1.INFORMACIÓN DEL PAJAJERO</p>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">NOMBRE Y APELLIDO</label>
        <input
          type="text"
          class="form-control"
          v-model="data.nombreApellido"
          :class="{ 'is-invalid': hasError('nombreApellido') }"
        />
        <div v-if="hasError('nombreApellido')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">EMAIL</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="name@example.com"
          v-model="data.email"
          :class="{ 'is-invalid': hasError('email') }"
        />
        <div v-if="hasError('email')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="row" style="margin-top: 20px">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">NÚMERO TELEFÓNICO</label>
          <input
            type="number"
            class="form-control"
            placeholder="312357030"
            v-model="data.numeroTelefonico"
            :class="{ 'is-invalid': hasError('numeroTelefonico') }"
          />
          <div v-if="hasError('numeroTelefonico')" class="invalid-feedback">
            {{ errorObject.errorMessage }}
          </div>
        </div>

        <div class="col-md-6">
          <label
            for="inputEmail4"
            class="form-label"
            style="display: flex; margin-bottom: 15px"
            >GENERO</label
          >
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">femenino</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">masculino</label>
            <div v-if="hasError('genero')" class="invalid-feedback">
              {{ errorObject.errorMessage }}
            </div>
          </div>
        </div>
      </div>

      <p style="font-size: 16px">2.FECHA EN LA QUE DESEA VIAJAR</p>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">CIUDAD DE ORIGEN</label>
        <input
          type="text"
          class="form-control"
          v-model="data.ciudadOrigen"
          :class="{ 'is-invalid': hasError('ciudadOrigen') }"
        />
        <div v-if="hasError('ciudadOrigen')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">CIUDAD DE DESTINO</label>
        <input
          type="text"
          class="form-control"
          v-model="data.ciudadDestino"
          :class="{ 'is-invalid': hasError('ciudadDestino') }"
        />
        <div v-if="hasError('ciudadDestino')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="col-md-6">
        <label for="tipoViaje" class="form-label">Selecciona el tipo de viaje</label>
        <select
          id="tipoViaje"
          class="form-select"
          v-model="data.tipoViaje"
          :class="{ 'is-invalid': hasError('tipoViaje') }"
        >
          <option>Viaje de ida</option>
          <option>Viaje de ida y vuelta</option>
        </select>
        <div v-if="hasError('tipoViaje')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div
        id="contenedorFechas"
        class="row"
        style="margin-top: 20px"
        v-if="data.tipoViaje === 'Viaje de ida y vuelta'"
      >
        <div class="col-md-6">
          <label for="fechaSalida" class="form-label">FECHA DE SALIDA</label>
          <input
            type="date"
            class="form-control"
            id="fechaSalida"
            v-model="data.fechaSalida"
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
            id="fechaRegreso"
            v-model="data.fechaRegreso"
            :class="{ 'is-invalid': hasError('fechaRegreso') }"
          />
        </div>
        <div v-if="hasError('fechaRegreso')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="col-md-6">
        <label for="recibirCotizacion" class="form-label"
          >DONDE DESEA RECIBIR LA COTIZACIÓN</label
        >
        <select
          id="recibirCotizacion"
          class="form-select"
          v-model="data.recibirCotizacion"
          :class="{ 'is-invalid': hasError('recibirCotizacion') }"
        >
          <option>WhatsApp</option>
          <option>Correo Electrónico</option>
        </select>
        <div v-if="hasError('recibirCotizacion')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          v-model="data.description"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Descripción del viaje</label>
      </div>

      <div class="button__container">
        <input
          class="form-check-input"
          type="checkbox"
          id="btnModalOpen"
          v-model="data.conditional"
          :class="{ 'is-invalid': hasError('conditional') }"
        />

        <label
          @click="toggleConditional"
          class="form-check-label"
          for="btnModalOpen"
          style="margin-left: 15px"
        >
          Leer términos y condiciones
        </label>
        <div v-if="hasError('conditional')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div style="margin-top: 30px; display: grid; justify-items: center" class="col-12">
        <button type="submit" class="btn btn-success">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { Joi } from "vue-joi-validation";
import { useAsync } from "../../hooks/useAsync";
import { useRouter } from "vue-router";
import ProgressCircular from "../Modales/ProgressCircular.vue";
import ModelError from "../Modales/ModelError.vue";
import ModeOfRegis from "../Modales/ModeOfRegis.vue";
import Conditional from "../Modales/Conditional.vue";

const { makeRequest, errorData, appStatus } = useAsync();
const router = useRouter();
const loadModule = ref(false);
const exictReg = ref(false);
const showModal = ref(false);

function closetForm() {
  router.push({ name: "ImportApp" });
}

const data = reactive({
  nombreApellido: "dasd",
  email: "test@test.com",
  numeroTelefonico: "213123122",
  genero: "masculino",
  ciudadOrigen: "dsadsq",
  ciudadDestino: "dsads",
  tipoViaje: "Viaje de ida",
  fechaSalida: "2023-01-01 10:30:50",
  fechaRegreso: "2023-01-01 10:30:50",
  recibirCotizacion: "WhatsApp",
  description: "Description",
  conditional: false,
});

const formData = {
  nombreApellido: Joi.string().required(),
  email: Joi.string().email().required(),
  numeroTelefonico: Joi.number().required(),
  genero: Joi.string().valid("femenino", "masculino").required(),
  ciudadOrigen: Joi.string().required(),
  ciudadDestino: Joi.string().required(),
  tipoViaje: Joi.string().valid("Viaje de ida", "Viaje de ida y vuelta").required(),
  fechaSalida: Joi.date().iso().optional().allow(null),
  fechaRegreso: Joi.date().iso().optional().allow(null),
  recibirCotizacion: Joi.string().valid("WhatsApp", "Correo Electrónico").required(),
  description: Joi.string().required(),
  conditional: Joi.boolean().valid(true).required(),
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

function toggleConditional() {
  showModal.value = true;
}

const itemsCloset = () => {
  showModal.value = false;
  data.conditional = true;
};

let current_datetime = new Date();

let formatted_date =
  current_datetime.getFullYear() +
  "-" +
  (current_datetime.getMonth() + 1) +
  "-" +
  current_datetime.getDate() +
  " " +
  current_datetime.getHours() +
  ":" +
  current_datetime.getMinutes() +
  ":" +
  current_datetime.getSeconds();

function createButton() {
  console.log("validation");
  const resultFrom = Joi.validate(data, formData, async (err, value) => {
    if (err) {
      console.log("error");
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
      console.log("error mensaje", final);
      console.log("condional", data.conditional);
    } else {
      loadModule.value = true;
      let tokenAccess = localStorage.getItem("MyToken");
      await makeRequest("information-request/create", { token: tokenAccess }, "POST", {
        Bank: "1",
        Category: "1",
        Title: "quote",
        DateTransaction: formatted_date,
        nombreApellido: data.nombreApellido,
        email: data.email,
        numeroTelefonico: data.numeroTelefonico,
        genero: data.genero,
        ciudadOrigen: data.ciudadOrigen,
        ciudadDestino: data.ciudadDestino,
        tipoViaje: data.tipoViaje,
        fechaSalida: data.fechaSalida,
        fechaRegreso: data.fechaRegreso,
        recibirCotizacion: data.recibirCotizacion,
        Description: data.description,
        conditional: data.conditional,
      });
      console.log("status", appStatus.value);
      data.nombreApellido = "";
      data.email = "";
      data.numeroTelefonico = "";
      data.genero = "";
      data.ciudadOrigen = "";
      data.ciudadDestino = "";
      data.tipoViaje = "";
      data.fechaSalida = "";
      data.fechaRegreso = "";
      data.recibirCotizacion = "";
      data.description = "";
      data.conditional = "";
      loadModule.value = false;
      exictReg.value = true;
    }
  });
}
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
