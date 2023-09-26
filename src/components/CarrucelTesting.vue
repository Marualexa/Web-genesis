<template>
  <div class="main-carrucel">
    <h4>Testimonios</h4>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
        <v-sheet height="55%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text">
              <v-card class="items">
                <p
                  class="mt-4 font-weight-bold mb-3"
                  align="center"
                  justify="center"
                >
                  Jonatan Gomez
                </p>
                <p text="justify" class="ml-3 mr-3 $fuentes-p">
                  Gracias por tus servicios, siempre que puedo te recomiendo
                </p>

                <div class="img-inf">
                  <img class="est" src="../assets/estrellas.png" alt="" />
                  <img src="../assets/user.png" alt="" />
                </div>
              </v-card>
            </div>
          </div>
        </v-sheet>
        <div class="d-flex justify-space-around align-center py-4">
          <img
            width="20"
            src="../assets/flecha-left.svg"
            alt="Imagen Anterior"
            @click="model = Math.max(model - 1, 0)"
          />
          <img
            src="../assets/boton.svg"
            alt="Contador"
            style="width: 30px; height: 30px"
          />
          <img
            width="20"
            src="../assets/flecha-right.svg"
            alt="Imagen Siguiente"
            @click="model = Math.min(model + 1, 4)"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
    };
  },
};
</script>

<style lang="sass">
@import "../sass/importComponent.scss"
</style>
