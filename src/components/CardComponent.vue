<template>
    <div class="card my-card border-0">
        <div><img :src="image" :alt="name" /></div>
        <div class="text-center card-body bg-warning">
          <h5 class="card-title text-white fs-6">{{ name }}</h5>
          <h6 class="card-text">{{ archetipo }}</h6>
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
    width: 100%;
  }

  .my-card{
    width: calc(100% / 5 - 20px);
  }
  </style>
  