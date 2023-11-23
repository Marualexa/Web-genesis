<template>
  <ProgressCircular v-if="isLoading && !errorData" />
  <ModelError v-if="errorData && !isLoading" />
  <InfoUser v-show="showItems" :updateOfId="updateOfId" @closet-model="closeModal" />
  <div class="container-info">
    <p>Información de cliente para cotización</p>
    <SearchFilters @vali-successful="handleSuccessful" />
    <table class="table" style="width: 100vw">
      <thead>
        <tr style="text-align: center">
          <th scope="col">Nombre y apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Genero</th>
          <th scope="col">Fecha y Hora de solicitud</th>
          <th scope="col">Detalle</th>
        </tr>
      </thead>
      <tbody style="width: 100%">
        <tr v-for="(cliente, i) in clientes" :key="i" style="text-align: center">
          <td>{{ cliente.nombreApellido }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.genero }}</td>
          <td>{{ dateFormat(cliente.DateTransaction) }}</td>
          <td>
            <v-btn @click="(ev) => detailUser(cliente.id)"
              ><img src="../../assets/eye.svg" alt=""
            /></v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNumber @page-event="eventButton" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, provide } from "vue";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useAsync } from "../../hooks/useAsync";
import PageNumber from "./PageNumber.vue";
import ProgressCircular from "../Modales/ProgressCircular.vue";
import ModelError from "../Modales/ModelError.vue";
import InfoUser from "./InfoUser.vue";
import SearchFilters from "./SearchFilters.vue";

const { result, makeRequest, errorData, isLoading } = useAsync();
const resultData = ref(null);
// const page = ref("1");
// const limit = ref("5");
const nombreApellido = ref("");
const email = ref("");
const DateTransaction = ref();
const genero = ref();
const stringLimit = ref("5");
const showItems = ref(false);
const updateOfId = ref(null);

function handleSuccessful(param) {
  if (param) {
    respuesta(param);
  }
}

const clientes = ref([
  {
    nombreApellido: "",
    email: "",
    DateTransaction: "",
    genero: "",
  },
]);

const dateFormat = (fecha) => {
  if (fecha) {
    return format(new Date(fecha), "MMMM d, yyyy h:mm a", { locale: es });
  }
  return "";
};

const respuesta = async (param = {}) => {
  try {
    let tokenAccess = localStorage.getItem("MyToken");
    let queryParams = {};

    if (nombreApellido.value) queryParams.nombreApellido = nombreApellido.value;
    if (email.value) queryParams.email = email.value;
    if (DateTransaction.value) queryParams.DateTransaction = DateTransaction.value;
    if (genero.value) queryParams.genero = genero.value;
    if (tokenAccess) queryParams.token = tokenAccess;

    queryParams.page = "1";
    queryParams.Bank = "1";
    queryParams.Category = "1";
    queryParams.Title = "quote";

    const response = await makeRequest("information-request/list", queryParams);

    if (result.value && result.value.data && result.value.data.Items) {
      console.log("Resultado de la consulta: ", result.value.data.Items);
      clientes.value = result.value.data.Items;
    }
  } catch (err) {
    console.error("Oops, algo salió mal! ", err);
    errorData.value = true;
  }
};

onMounted(() => {
  respuesta();
});

function changesPage(args) {
  page.value = args;
}

function eventButton(args) {
  console.log("eventListProducts", args);
  changesPage(args);
}

function detailUser(id) {
  updateOfId.value = id;
  showItems.value = true;
}

function closeModal() {
  showItems.value = false;
}

provide("page", {
  // page,
  changesPage,
  resultData,
  stringLimit,
});

// watch(
//   () => page.value,
//   (val) => {
//     return respuesta();
//   }
// );
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
