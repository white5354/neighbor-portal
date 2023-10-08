import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Layout from '../views/Layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [{
        path: '/home',
        name: 'home',
        component: Home
      }]
    },
    
  ]
})

export default router
