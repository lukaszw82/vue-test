import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'
import HomeView from '../views/HomeView.vue'
import CallbackView from '../views/CallbackView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      beforeEnter: authGuard
    }
  ]
})

export default router
