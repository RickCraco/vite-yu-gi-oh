import { reactive } from "vue";

export const store = reactive({
    num: '',
    apiUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    endPoint: {},
    cardList: [],
    flag: true,
    archetypes: [],
    apiUrlArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php"
})