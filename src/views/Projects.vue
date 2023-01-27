<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'Projects',
    components: {
        ProjectCard
    },
    data() {
    return {
      baseUrl: "http://127.0.0.1:8000/api/",
      projects: [],
      pagination: {
        current: 1,
        lastPage: null,
      },
    };
  },
  methods: {
    getApi(page) {
      this.pagination.current = page;
      axios
        .get(this.baseUrl + "projects", {
          params: {
            page: this.pagination.current,
          },
        })
        .then((risultato) => {
          this.projects = risultato.data.projects.data;
          this.pagination.lastPage = risultato.data.projects.last_page
          console.log(this.pagination.lastPage);
        });
    },
  },
    mounted(){
        this.getApi(1)
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
        :cardDescription="project.summary"
        :cardTechnologies="project.technologies"
        :cardType="project.type" />
        <div>
            <button
            :disabled="pagination.current == pagination.lastPage"
            @click="getApi(pagination.current + 1)" >
                &rarr;
            </button>
            <button 
            :disabled="pagination.current == 1"
            @click="getApi(pagination.current - 1)" >
                &larr;
            </button>
        </div>
    </div>
    
</template>

<style lang="scss">
 
</style>