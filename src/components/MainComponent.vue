<template>
    <div class="row g-3 py-3">
      <CardComponent
        v-for="(el, index) in store.characterList"
        :image="el.image"
        :name="el.name"
        :specie="el.species"
        :state="el.status"
      />
    </div>
  </template>
  
  <script>
  import CardComponent from "./CardComponent.vue";
  import { store } from "../data/store";
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
  