import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import DetailsProject from '../views/DetailsProject.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path:'/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects/details/:slug',
        name: 'details_project',
        component: DetailsProject
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;