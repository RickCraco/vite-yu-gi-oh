<script>
import LoaderComponent from "./components/LoaderComponent.vue";
import { store } from "./store.js";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import NameComponent from "./components/NameComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, MainComponent, LoaderComponent, SearchComponent, NameComponent },
  data() {
    return {
      store,
      params: null
    };
  },
  methods: {
    getCharacters() {
      const url = store.apiUrl;
      axios.get(url, {params: this.params}).then((response) => {
        console.log(response.data.data);
        store.cardList = response.data.data;
        store.flag = false
      });
    },
    /*
    getArchetypes() {
      const url = store.apiUrlArchetypes;
      axios.get(url).then((response) => {
        console.log(response.data);
        store.archetypes = response.data;
      })
    }*/
    filteredArchetypes(value) {
      if(value){
        this.params = {
          archetype: value
        }
      }else{
        this.params = null
      }
      this.getCharacters();
    },
    filterByName(value){
      if(value){
        this.params = {
          fname: value,
        }
      }else{
        this.params = null
      }
      this.getCharacters();
    }
  },
  created() {
    function getCard(){
      return axios.get(store.apiUrl);
    }
    function getArchetypes(){
      return axios.get(store.apiUrlArchetypes);
    }

    Promise.all([getCard(), getArchetypes()]).then(function (response){
      store.cardList = response[0].data.data;
      store.archetypes = response[1].data;
      store.flag = false;
    })
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
      <SearchComponent @change-archetype="filteredArchetypes"/>
      <NameComponent @card-by-name="filterByName"/>
      <MainComponent />
    </main>

  </div>
</template>

<style scoped></style>
