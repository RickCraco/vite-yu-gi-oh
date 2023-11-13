<template>
    <div class="bg-warning">
        <div class="row g-3 py-3 bg-white p-3">
            <div>
                <h3>Found {{ store.cardList.length }} cards</h3>
            </div>
            <CardComponent v-for="el in store.cardList" 
                :image="el.card_images[0].image_url" 
                :name="el.name"
                :archetipo="el.archetype" />
        </div>
    </div>
</template>
  
<script>
import CardComponent from "./CardComponent.vue";
import { store } from "../store.js";
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
  