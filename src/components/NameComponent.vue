<template>
    <div>
        <div class="container my-5">
            <input type="text" class="form-control" v-model="cardName" @keyup.enter="$emit('cardByName', cardName)">
        </div>
    </div>
</template>

<script>
    //import { store } from '../store';
    export default {
        name : 'NameComponent',
        data(){
            return{
                //store,
                cardName: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    input{
        width: 30% !important;
    }
</style>