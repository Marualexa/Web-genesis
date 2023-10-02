<template>
  <div class="icon-social">
    <p>El mejor vieje comienza adentro</p>
    <div class="container__card">
      <Generic
        v-for="(item, index) in items"
        :key="index"
        :styleCart="item.styleCart"
        :imgCheck="item.imgCheck"
        :information="item.information"
        :url="url"
      />
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
    url: "https://mail.google.com"
  },
  {
    styleCart: "icon__social",
    imgCheck: whatsapp,
    information: "",
    url: "https://mail.google.com"
  },
  {
    styleCart: "icon__social",
    imgCheck: Spotify,
    information: "",
    url: "https://mail.google.com"
  },
  {
    styleCart: "icon__social",
    imgCheck: gmail,
    information: "",
    url: "https://mail.google.com"
  },
];
</script>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>

