<script>
import LoaderComponent from "./components/LoaderComponent.vue";
import { store } from "./store.js";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, MainComponent, LoaderComponent, SearchComponent },
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
        store.flag = false
      });
    },
  },
  created() {
    this.getCharacters();
  },
};
</script>

<template>
  <LoaderComponent v-if="store.flag" />
  <div v-else>
    <header>
      <HeaderComponent title="Yu-Gi-Oh API" />
    </header>
    <main class="bg-warning p-5 mt-4">
      <SearchComponent/>
      <MainComponent />
    </main>

  </div>
</template>

<style scoped></style>
