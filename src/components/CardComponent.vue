<template>
    <div class="col-3">
        <div><img :src="image" :alt="name" /></div>
        <div class="text-center py-2">
          <h5>{{ name }}</h5>
          <h6>{{ archetipo }}</h6>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComponent",
    props: {
      image: String,
      name: String,
      archetipo: String
    },
  };
  </script>
  
  <style lang="scss" scoped>
  img {
    width: 250px;
    height: 350px;
  }
  </style>
  