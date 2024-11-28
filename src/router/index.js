import { createRouter, createWebHistory } from 'vue-router'
import LayoutFull from '@/layouts/LayoutFull.vue';
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue';

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
          path: '/about',
          name: 'About',
          component: AboutView,
        },
      ],
 } ]
},
)
export default router;