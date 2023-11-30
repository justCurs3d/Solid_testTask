import mainPage from "@/pages/mainPage";
import allInDatePage from "@/pages/allInDatePage";
import oneInPeriodPage from "@/pages/oneInPeriodPage";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: mainPage },
    { path: '/all_in_date', component: allInDatePage },
    { path: '/one_in_period', component: oneInPeriodPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router