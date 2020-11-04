import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: ()=> import('../views/Home'),
    children: [
      {
        path: '/index',
        name: 'Dashboard',
        meta: '首页',
        component: () => import('../views/Dashboard')
      },
      {
        path: '/user',
        name: 'User',
        meta: '用户',
        component: () => import('../views/Dashboard')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
