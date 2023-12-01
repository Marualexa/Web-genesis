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
    <div class="d-grid gap-2 col-6 mx-auto" style="width: 15%; margin-bottom: 10px">
      <button
        type="button"
        @click="loadMore"
        class="btn btn-info"
        :disabled="allDataLoaded"
      >
        Cargar más
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useAsync } from "../../hooks/useAsync";
import ProgressCircular from "../Modales/ProgressCircular.vue";
import ModelError from "../Modales/ModelError.vue";
import InfoUser from "./InfoUser.vue";
import SearchFilters from "./SearchFilters.vue";
import { useCartStore } from "../../store/cartContainer";

const store = useCartStore();
const { result, makeRequest, errorData, isLoading } = useAsync();
const page = ref("1");
const limit = ref("5");
const allDataLoaded = ref(false);
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

const respuesta = async (param = {}, page = 1) => {
  try {
    let tokenAccess = localStorage.getItem("MyToken");
    let queryParams = {};

    if(page > 1 && clientes.value.length > 0) {
      const lastItem = clientes.value[clientes.value.length - 1];
      queryParams.Uid = lastItem.Uid;
      queryParams.DateTransaction = lastItem.DateTransaction;
    }

    if (param.nombreApellido) queryParams.nombreApellido = param.nombreApellido;
    if (param.DateTransaction) queryParams.DateTransaction = param.DateTransaction;
    if (param.recibirCotizacion) queryParams.recibirCotizacion = param.recibirCotizacion;
    if (param.tipoViaje) queryParams.tipoViaje = param.tipoViaje;
    if (param.fechaSalida) queryParams.fechaSalida = param.fechaSalida;
    if (param.fechaRegreso) queryParams.fechaRegreso = param.fechaRegreso;
    if (tokenAccess) queryParams.token = tokenAccess;

    queryParams.page = page;
    queryParams.Bank = "1";
    queryParams.Category = "1";
    queryParams.Title = "quote";

    const response = await makeRequest("information-request/list", queryParams);

    if (result.value && result.value.data && result.value.data.Items) {
      console.log("Resultado de la consulta: ", result.value.data.Items);
      // clientes.value = (result.value.data.Items);
      clientes.value = [...clientes.value, ...result.value.data.Items];
      if (clientes.value.length === 0 || result.value.data.Items.length === 0) {
        allDataLoaded.value = true;
      }
    }
    
  } catch (err) {
    console.error("Oops, algo salió mal! ", err);
    errorData.value = true;
  }
};

const loadMore = async () => {
  if (allDataLoaded.value) {
    return;
  }
  page.value++;
  await respuesta({}, page.value);
  console.log("Cargar mas", loadMore);
};

onMounted(() => {
  respuesta();
});

function closetModal() {
  showItems.value = false;
}

function handleSuccessful(param) {
  if (param) {
    respuesta(param);
  }
}

const findClientById = (id) => {
  const client = clientes.value.find((cliente) => cliente.Uid === id);
  return client;
};

function detailUser(id) {
  const client = findClientById(id);
  store.personInfo(client);
  showItems.value = true;
}
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
