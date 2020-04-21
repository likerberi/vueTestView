import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/RoomIndexPage';
import Show from '@/components/RoomShowPage';

Vue.use(Router);

export const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/:id',
            name: 'show',
            component: Show
        }
    ]
})