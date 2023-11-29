<template>
  <div>
    <table class="table" style="width: 100vw">
      <thead>
        <tr style="text-align: center">
          <th scope="col">Nombre y apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Detalle</th>
        </tr>
      </thead>
      <tbody style="width: 100%">
        <tr v-for="(cliente, i) in clientes" :key="i" style="text-align: center">
          <td>{{ cliente.nombreApellido }}</td>
          <td>{{ cliente.email }}</td>
          <td>
            <v-btn @click="(ev) => detailUser(cliente.Uid)"
              ><img src="../../assets/eye.svg" alt=""
            /></v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, provide } from "vue";
import { useAsync } from "../../hooks/useAsync";
import { useCartStore } from "../../store/cartContainer";

const store = useCartStore();
const { result, makeRequest, errorData, isLoading } = useAsync();
const showItems = ref(false);

const clientes = ref([
  {
    nombreApellido: "",
    email: "",
    DateTransaction: "",
    genero: "",
  },
]);

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
