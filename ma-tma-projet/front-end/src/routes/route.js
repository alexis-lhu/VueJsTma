import { createRouter, createWebHistory } from 'vue-router';
import loginForm from '../login/pageform.vue';
import loggedSuccess from '../login/loggedSuccess.vue';

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
      component: loggedSuccess
    }
  ]
});

export default router;
