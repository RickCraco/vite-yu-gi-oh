<template>
    <header class="container">
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
  
  <style lang="scss" scoped></style>
  