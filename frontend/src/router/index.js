import { createRouter, createWebHistory } from 'vue-router'

import TicketForm from '../views/TicketForm.vue'

const routes = [
    {
        path: "/",
        component: TicketForm,

    },
]
const router = createRouter({
    history: createWebHistory('/'),
    routes
 })
 
 export default router