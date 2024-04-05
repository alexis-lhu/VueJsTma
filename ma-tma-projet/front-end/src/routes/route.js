import { createRouter, createWebHistory } from 'vue-router';
import loginForm from '@/login/pageform.vue';
import LoggedSuccess from '@/login/loggedSuccess.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: loginForm,
    },
    {
      path: '/loggedSuccess',
      component: LoggedSuccess,
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
});

export default router;
