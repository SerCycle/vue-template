import { createRouter, createWebHashHistory } from "vue-router";

import KaryawanHome from '../pages/karyawan/KaryawanHome.vue';
import KaryawanProfile from '../pages/karyawan/KaryawanProfile.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: KaryawanHome
    },
    {
        name: 'profile',
        path: '/profile',
        component: KaryawanProfile
    }
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHashHistory(),
        routes,
    });
    return router;
}