<template>
    <div class="row g-3 py-3">
      <CardComponent
        v-for="el in store.cardList"
        :image="el.card_images[0].image_url"
        :name="el.name"
        :specie="el.species"
        :state="el.status"
      />
    </div>
  </template>
  
  <script>
  import CardComponent from "./CardComponent.vue";
  import { store } from "../store.js";
  export default {
    name: "MainComponent",
    components: {
      CardComponent,
    },
    data() {
      return {
        store,
      };
    },
    methods: {},
  };
  </script>
  
  <style lang="scss" scoped></style>
  