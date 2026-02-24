import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from '../stores/login.store.js'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({
        message: route.params.message ?? '',
        color: route.params.color ?? '',
      }),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/books',
      name: 'books',
      alias: '/libros',
      component: () => import('../views/BooksView.vue'),
    },
    {
      path: '/books/:id',
      name: 'book-details',
      component: () => import('../views/BookDetailsView.vue'),
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const loginStore = useLoginStore()
  if (to.meta.requiresAuth && !loginStore.sesion) return { name: 'login' }
  if (to.name === 'login' && loginStore.sesion) return { name: 'home' }
})

export default router
