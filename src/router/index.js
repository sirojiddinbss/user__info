import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout
    },
    
  ]
})

export default router
