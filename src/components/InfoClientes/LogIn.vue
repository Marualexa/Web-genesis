<template>
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
      </form>
    </div>
  </div>
</template>

<script setup>
import { Joi } from "vue-joi-validation";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  passwordVerif: "",
});

const errorObject = reactive({
  errorName: "",
  errorMessage: "",
});

const userJoi = {
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  passwordVerif: Joi.ref("password"),
};

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

const loginAdd = () => {
  const resultFrom = Joi.validate(user, userJoi, (err, value) => {
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
      router.push({ name: "infoTable" });
    }
  });
};
</script>
