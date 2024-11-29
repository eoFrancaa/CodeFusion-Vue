import { createRouter, createWebHistory } from 'vue-router'
import LayoutFull from '@/layouts/LayoutFull.vue';
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/ConselhoView.vue';
import SobreView from '@/views/SobreView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/conselho',
          name: 'About',
          component: AboutView,
        },
        {
          path: '/sobre',
          name: 'Sobre',
          component: SobreView,
        },
      ],
 } ]
},
)
export default router;
