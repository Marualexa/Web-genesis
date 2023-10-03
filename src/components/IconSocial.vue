<template>
  <div class="icon-social">
    <p>El mejor vieje comienza adentro</p>
    <div class="container__card">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.link"
        target="_blank"
      >
        <Generic
          :styleCart="item.styleCart"
          :imgCheck="item.imgCheck"
          :information="item.information"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import Generic from "./GenericCards.vue";
import instagram from "@img/instagram.png";
import whatsapp from "@img/whatsapp.png";
import Spotify from "@img/Spotify.svg";
import gmail from "@img/gmail.png";

const items = [
  {
    styleCart: "icon__social",
    imgCheck: instagram,
    information: "",
    link: "https://instagram.com/enmarchagenesis?igshid=MzMyNGUyNmU2YQ=="
  },
  {
    styleCart: "icon__social",
    imgCheck: whatsapp,
    information: "",
    link: "https://wa.me/message/VZRUVHISBWXFA1"
  },
  {
    styleCart: "icon__social",
    imgCheck: Spotify,
    information: "",
    link: ""
  },
  {
    styleCart: "icon__social",
    imgCheck: gmail,
    information: "",
    link: ""
  },
];
</script>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>

