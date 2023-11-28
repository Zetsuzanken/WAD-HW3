import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
