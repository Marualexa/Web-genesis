<template>
  <ProgressCircular v-if="progressCircular && !errorData" />
  <ModelError v-if="errorData && !progressCircular" />
  <InfoUser v-show="showItems" :updateOfId="updateOfId" @closet-model="closeModal" />
  <div class="container-info">
    <p>Información de cliente para cotización</p>
    <SearchFilters />
    <table class="table" style="width: 100vw; margin-right: 15px">
      <thead>
        <tr style="text-align: center">
          <th scope="col">Nombre y apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Número telefónico</th>
          <th scope="col">Genero</th>
          <th scope="col">Detalle</th>
        </tr>
      </thead>
      <tbody style="width: 100%">
        <tr v-for="(cliente, i) in clientes" :key="i" style="text-align: center">
          <td>{{ cliente.nombreApellido }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.numeroTelefonico }}</td>
          <td>{{ cliente.genero }}</td>
          <td>
            <v-btn @click="(ev) => detailUser(cliente.id)"><img src="../../assets/eye.svg" alt="" /></v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNumber @page-event="eventButton" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, provide } from "vue";
import { useAsync } from "../../hooks/useAsync";
import PageNumber from "./PageNumber.vue";
import ProgressCircular from "../Modales/ProgressCircular.vue";
import ModelError from "../Modales/ModelError.vue";
import InfoUser from "./InfoUser.vue";
import SearchFilters from "./SearchFilters.vue"

const { result, makeRequest, cabecera, errorData } = useAsync();
const resultData = ref(null);
const page = ref("1");
const limit = ref("5");
const stringLimit = ref("5");
const progressCircular = ref(false);
const showItems = ref(false);
const updateOfId = ref(null);

const clientes = ref([
  {
    nombreApellido: "",
    email: "",
    numeroTelefonico: "",
    genero: "",
  },
]);

const respuesta = async () => {
  await makeRequest("userRegist", {
    _page: page.value,
    _limit: limit.value,
  });
  clientes.value = result.value;
  const { "x-total-count": xTotal } = cabecera.value;
  const numberStrin = Number(xTotal);
  const stringLimit = Number(limit.value);

  const divition = numberStrin / stringLimit;
  resultData.value = Math.ceil(divition);
  return result.value;
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
  page,
  changesPage,
  resultData,
  stringLimit,
});

watch(
  () => page.value,
  (val) => {
    return respuesta();
  }
);
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
