<template>
    <header class="container d-flex align-items-center mt-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png" alt="yugi">
        <h1>{{ title }}</h1>
    </header>
</template>
  
  <script>
  export default {
    name: "HeaderComponent",
    props: ["title"],
    data() {
      return {};
    },
  };
  </script>
  
<style lang="scss" scoped>
    img{
        width: 200px;
    }
</style>
  