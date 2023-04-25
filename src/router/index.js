import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user.js';

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  const user = await userStore.currentUser();

  if (user) {
    next();
  }
  else {
    next('/login')
  }

  userStore.loadingSession = false;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
