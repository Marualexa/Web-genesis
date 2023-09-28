<template>
  <div class="main-carrucel">
    <h4>Testimonios</h4>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(item, i) in items" :key="i" :value="i">
        <v-sheet height="55%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text">
              <v-card class="items">
                <p class="mt-4 font-weight-bold mb-3" align="center" justify="center">
                  {{ item.name }}
                </p>
                <p text="justify" class="ml-3 mr-3 $fuentes-p">
                  {{ item.message }}
                </p>

                <div class="img-inf">
                  <img class="est" src="../assets/estrellas.png" alt="" />
                  <img src="../assets/icon.svg" alt="" />
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
      items: [
        {
          name: "Jonatan Gomez",
          message: "Gracias por tus servicios, siempre que puedo te recomiendo.",
        },
        {
          name: "Angie Bautista",
          message:
            "La mejor siempre, todo lo relacionado con vuelo, ella siempre es la mejor.",
        },
        {
          name: "Paula Zuluaga",
          message:
            "Cuando quiero viajar siempre confió en ella, es la mejor y me consigue los mejores precios.",
        },
        {
          name: "Ivonne Gomez",
          message: "Gracias por estar pendiente durante el viaje, eres muy responsable.",
        },
        {
          name: "Drenk Music",
          message:
            "Ella me hace todo, sea la hora que sea, me busca buenas ofertas y me hace cada Check In.",
        },
        {
          name: "Gladys Aranda",
          message:
            "Sé que estuve intensa, porque por falta de documentos me devolvieron de un viaje, pero de verdad gracias por estar tan preparada con todo.",
        },
        {
          name: "Andrea Rodriguez",
          message: "Seguiré viajando contigo, has sido de gran ayuda.",
        },
        {
          name: "Gonzalo Nieto",
          message:
            "Nos ayudaste demasiado, es imposible no seguir viajando contigo y recomendarte es un placer.",
        },
      ],
      model: 0,
    };
  },
};
</script>

<style lang="sass">
@import "../sass/importComponent.scss"
</style>
