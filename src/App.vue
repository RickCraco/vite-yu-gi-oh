<script>
import { store } from "./store.js";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, MainComponent },
  data() {
    return {
      store,
    };
  },
  methods: {
    getCharacters() {
      const url = store.apiUrl;
      axios.get(url).then((response) => {
        console.log(response.data.data);
        store.cardList = response.data.data;
      });
      axios.get(url).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    },
  },
  created() {
    this.getCharacters();
  },
};
</script>

<template>
  <header>
    <HeaderComponent title="Yu-Gi-Oh API" />
  </header>
  <main class="container">
    <MainComponent />
  </main>

  <FooterComponent />
</template>

<style scoped></style>
