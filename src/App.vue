<script>
import axios from 'axios';
export default {
    name: 'app',
    data(){
        return {
            baseUrl: 'http://127.0.0.1:8000/api/',
            projects: []
        }
    },
    methods: {
        getApi(){
            axios.get(this.baseUrl + 'projects')
                  .then(risultato => {
                     console.log(risultato.data);
                  } )
        }
    },
    mounted(){
        this.getApi()
    }
}
</script>

<template>
  
</template>

<style lang="scss">
    @use './style/general.scss';
</style>