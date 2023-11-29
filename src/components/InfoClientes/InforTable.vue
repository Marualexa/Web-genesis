<template>
  <ProgressCircular v-if="isLoading && !errorData" />
  <ModelError v-if="errorData && !isLoading" />
  <InfoUser v-show="showItems" @closet-model="closetModal" />
  <div class="container-info">
    <div class="info__title">
      <img src="../../assets/logo.png" alt="" />
      <p>Información de cliente para cotización</p>
    </div>
    <SearchFilters @valid-successful="(filters) => handleSuccessful(filters)" />
    <div class="table-responsive">
      <table class="table">
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
              <v-btn @click="(ev) => detailUser(cliente.Uid)"
                ><img src="../../assets/eye.svg" alt=""
              /></v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
import { useCartStore } from "../../store/cartContainer";

const store = useCartStore();
const { result, makeRequest, errorData, isLoading } = useAsync();
// const resultData = ref(null);
// const page = ref("1");
// const limit = ref("5");
// const stringLimit = ref("5");
const showItems = ref(false);

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

    if (param.nombreApellido) queryParams.nombreApellido = param.nombreApellido;
    if (param.DateTransaction) queryParams.DateTransaction = param.DateTransaction;
    if (param.recibirCotizacion) queryParams.recibirCotizacion = param.recibirCotizacion;
    if (param.tipoViaje) queryParams.tipoViaje = param.tipoViaje;
    if (param.fechaSalida) queryParams.fechaSalida = param.fechaSalida;
    if (param.fechaRegreso) queryParams.fechaRegreso = param.fechaRegreso;
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

function closetModal() {
  showItems.value = false;
}

// function changesPage(args) {
//   page.value = args;
// }

function handleSuccessful(param) {
  if (param) {
    respuesta(param);
  }
}

// function eventButton(args) {
//   console.log("eventListProducts", args);
//   changesPage(args);
// }

const findClientById = (id) => {
  const client = clientes.value.find((cliente) => cliente.Uid === id);
  return client;
};

function detailUser(id) {
  const client = findClientById(id);
  store.personInfo(client);
  showItems.value = true;
}

// provide("page", {
//   // page,
//   changesPage,
//   resultData,
//   stringLimit,
// });

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
