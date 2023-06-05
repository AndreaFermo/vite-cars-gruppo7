import {createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCar from './pages/AppCar.vue';
import AppError from './pages/AppError.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/car/:id',
            name: 'car',
            component: AppCar
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppError
        }

    ]
})

export { router };