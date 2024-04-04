import loginForm from '@/login/pageform.vue';
import LoggedSuccess from '@/login/loggedSuccess.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/login',
        name: 'LoginForm',
        component: loginForm
      },
      {
        path: '/loggedSuccess',
        name: 'LoggedSuccess',
        component: LoggedSuccess
      }
  ]
});

export default router;
// route.js

export { default as loginForm } from '@/login/pageform.vue';
export { default as LoggedSuccess } from '@/login/loggedSuccess.vue';

// Reste du code


