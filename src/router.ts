import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./App.vue'),
    },
  ],
})

export default router
