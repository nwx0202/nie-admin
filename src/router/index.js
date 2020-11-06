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
        path: '/system',
        name: 'System',
        meta: '系统管理',
        component: () => import('../views/System'),
        children: [
          {
            path: '/user',
            name: 'User',
            meta: '用户管理',
            component: () => import('../views/System/User')
          },
          {
            path: '/role',
            name: 'Role',
            meta: '角色管理',
            component: () => import('../views/System/Role')
          },
          {
            path: '/menu',
            name: 'Menu',
            meta: '菜单管理',
            component: () => import('../views/System/Menu')
          },
        ]
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
