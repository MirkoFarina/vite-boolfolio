<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
    name: 'app',
    components: {
        ProjectCard
    },
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
                    this.projects = risultato.data.projects;
                  } )
        }
    },
    mounted(){
        this.getApi()
    }
}
</script>

<template>
    <div class="main-container">
        <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :cardTitle="project.name"
        :cardClient="project.client_name"
        :cardDescription="project.summary" />
    </div>
</template>

<style lang="scss">
    @use './style/general.scss';
</style>