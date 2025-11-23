import { createRouter, createWebHistory } from '@ionic/vue-router';

import MemoriesPages from '../Pages/MemoriesPages.vue';
import AddMemoriesPage from '../Pages/AddMemoriesPage.vue';
import MemoriesDetailsPage from '../Pages/MemoriesDetailsPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPages
  },
  {
    path: '/add-memories',
    component: AddMemoriesPage
  },
  {
    path: '/memories/:id',
    component: MemoriesDetailsPage
  },
  {
    path: '/memories/add',
    component: AddMemoriesPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
