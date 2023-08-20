import { createRouter, createWebHistory } from "vue-router";

let routes = [
    { path: "/", redirect: '/initgame', component: () => import("../views/InitGame.vue") },
    { path: "/initgame", component: () => import("../views/InitGame.vue") },
    { path: "/gaming", component: () => import("../views/Gaming.vue") },
    { path: "/finishgame", component: () => import("../views/FinishGame.vue") },
    { path: "/secret", component: () => import("../views/Secret.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router, routes }
