<template>
  <div class="main-carrucel">
    <h4>Testimonios</h4>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(item, i) in items" :key="i" :value="i">
        <v-sheet height="55%" tile>
          <div class="d-flex-item fill-height">
            <div class="text">
              <v-card class="items">
                <div class="v-card-wrapper">
                  <p class="mt-4 font-weight-bold mb-3" align="center" justify="center">
                    {{ item.name }}
                  </p>
                  <p text="justify" class="ml-3 mr-3 $fuentes-p v-card-text-info">
                    {{ item.message }}
                  </p>

                  <div class="img-inf">
                    <img class="est" src="@img/estrellas.png" alt="" />
                    <img :src="item.imageSrc" alt="" />
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </v-sheet>
        <div class="d-flex justify-space-around align-center py-4">
          <img
            width="20"
            src="@img/flecha-left.svg"
            alt="Imagen Anterior"
            @click="model = Math.max(model - 1, 0)"
          />
          <img src="@img/boton.svg" alt="Contador" style="width: 30px; height: 30px" />
          <img
            width="20"
            src="@img/flecha-right.svg"
            alt="Imagen Siguiente"
            @click="model = Math.min(model + 1, 4)"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import jonatan from "../../assets/Jhonatan.jpeg";
import angie from "../../assets/Angie.jpeg";
import paula from "../../assets/Paula.jpeg";
import ivonne from "../../assets/Ivonne.jpeg";
import drenk from "../../assets/Drenk.jpeg";
import icon from "../../assets/icon.svg";
export default {
  data() {
    return {
      items: [
        {
          name: "Jonatan Gomez",
          message: "Gracias por tus servicios, siempre que puedo te recomiendo.",
          imageSrc: jonatan,
        },
        {
          name: "Angie Bautista",
          message:
            "La mejor siempre, todo lo relacionado con vuelos, ella siempre es la mejor.",
          imageSrc: angie,
        },
        {
          name: "Paula Zuluaga",
          message:
            "Cuando quiero viajar siempre confió en ella, es la mejor y me consigue los mejores precios.",
          imageSrc: paula,
        },
        {
          name: "Ivonne Gomez",
          message: "Gracias por estar pendiente durante el viaje, eres muy responsable.",
          imageSrc: ivonne,
        },
        {
          name: "Drenk Music",
          message:
            "Ella me hace todo, sea la hora que sea, me busca buenas ofertas y me hace cada Check In.",
          imageSrc: drenk,
        },
        {
          name: "Gladys Aranda",
          message:
            "Sé que estuve intensa, porque por falta de documentos me devolvieron de un viaje, pero de verdad gracias por estar tan preparada con todo.",
          imageSrc: icon,
        },
        {
          name: "Andrea Rodriguez",
          message: "Seguiré viajando contigo, has sido de gran ayuda.",
          imageSrc: icon,
        },
        {
          name: "Gonzalo Nieto",
          message:
            "Nos ayudaste demasiado, es imposible no seguir viajando contigo y recomendarte es un placer.",
          imageSrc: icon,
        },
      ],
      model: 0,
    };
  },
};
</script>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>
