<template>
    <div class="col-3">
      <div>
        <div><img :src="image" :alt="name" /></div>
        <div class="text-center py-2">
          <h5>{{ name }}</h5>
          <h6>{{ state }}</h6>
          <h6>{{ specie }}</h6>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComponent",
    props: {
      image: String,
      name: String,
      specie: String,
      state: String,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  img {
    width: 100%;
  }
  </style>
  