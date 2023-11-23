<template>
  <ProgressCircular v-if="isLoading && !errorData" />
  <ModelError v-if="errorData && !isLoading" />
  <div class="login">
    <div class="form-container">
      <img src="../../assets/logo.png" alt="logo" class="logo" />

      <form class="form forms-log">
        <div>
          <label for="email" class="label">Email</label>
          <input
            type="text"
            v-model="user.email"
            class="input input-password"
            placeholder="email.23@gmail.com"
            :class="{ 'is-invalid': hasError('email') }"
          />
          <div v-if="hasError('email')" class="invalid-feedback">
            {{ errorObject.errorMessage }}
          </div>
        </div>

        <div>
          <label for="password" class="label">Password</label>
          <input
            type="password"
            v-model="user.password"
            placeholder="*********"
            class="input input-password"
          />
          <div v-if="hasError('password')" class="invalid-feedback">
            {{ errorObject.errorMessage }}
          </div>
        </div>

        <button @click="loginAdd" type="button" class="primary-button login-button">
          Login
        </button>

        <div v-if="hasGeneralError" class="alert alert-danger">
          {{ generalErrorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Joi } from "vue-joi-validation";
import ProgressCircular from "../Modales/ProgressCircular.vue";
import ModelError from "../Modales/ModelError.vue";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useAsync } from "../../hooks/useAsync";

const { result, makeRequest, appStatus, isLoading, errorData } = useAsync();
isLoading.value = false

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});

const errorObject = reactive({
  errorName: "",
  errorMessage: "",
});

const generalError = reactive({
  message: "",
});

const hasGeneralError = computed(() => {
  return generalError.message !== "";
});

const generalErrorMessage = computed(() => {
  return generalError.message;
});

const userJoi = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

function loginAdd() {
  const resultFrom = Joi.validate(user, userJoi, async (err, value) => {
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
      console.log("error", errorObject.errorMessage);
    } else {
      generalError.message = "";
      await makeRequest("user/login", {
        email: user.email,
        password: user.password,
      });
      console.log("Respuesta de", appStatus.value);
      if (
        result.value &&
        result.value.data &&
        result.value.data.AuthenticationResult &&
        result.value.data.AuthenticationResult.AccessToken
      ) {
        console.log(
          "AccessToken ha llegado correctamente: ",
          result.value.data.AuthenticationResult.AccessToken
        );
        let myToken = result.value.data.AuthenticationResult.AccessToken;
        localStorage.setItem("MyToken", myToken);
        router.push({ name: "infoTable" });
      } else {
        generalError.message = "¡Ha ocurrido un error! Por favor, verifica tus datos.";
        console.log("AccessToken no se encuentra disponible");
      }
    }
  });
}
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
