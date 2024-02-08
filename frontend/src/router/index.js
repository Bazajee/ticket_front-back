import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        component: () => import('/src/views/LogIn.vue'),
        props: true,

    },
    {
        path: "/recap/:ticketId",
        component: () => import('/src/views/Recap.vue'),
        props: true,

    },
    {
        path: "/tickets",
        component: () => import('/src/views/Tickets.vue'),
        children: [
            {
                path: ":ticketId",
                component: () => import('/src/components/TicketDetail.vue'),
                props: true,
            }

        ]

    },
    {
        path: "/login",
        component: () => import('/src/views/LogIn.vue'),
        props: true
    },
    {
        path: "/ticket",
        component: () => import('/src/views/TicketForm.vue'),
        props: true
    }


]
const router = createRouter({
    history: createWebHistory('/'),
    routes
 })
 
 export default router