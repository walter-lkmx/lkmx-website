import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import(/* webpackChunkName: "index" */ './pages/Home.vue') },
    { path: '/services', component: () => import(/* webpackChunkName: "about" */ './pages/Services.vue') },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})


export default router;