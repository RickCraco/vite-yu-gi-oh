<template>
    <div class="bg-warning py-4">
      <div class="container">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="filterValue"
          @change="$emit('changeArchetype', filterValue)"
        >
          <option value="">All cards</option>
          <option
            v-for="(el, index) in store.archetypes"
            :value="el.archetype_name"
          >
            {{ el.archetype_name }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from "../store";
  export default {
    name: "SearchComponent",
    data() {
      return {
        store,
        filterValue: "",
      };
    },
    methods() {},
  };
  </script>
  
  <style lang="scss" scoped>
  .form-select {
    width: 30% !important;
  }
  </style>