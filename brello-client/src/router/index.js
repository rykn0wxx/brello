/**
 * Vue Router
 *
 * @library
 *
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import store from '@/store'

// Routes
// import paths from './paths'

// function route(path, view, name) {
//   return {
//     name: name || view,
//     path,
//     component: (resovle) => import(
//       `@/views/${view}.vue`
//     ).then(resovle)
//   }
// }

const customRoutes = [
  {
    path: '/',
    component: (resolve) => import('@/views/layouts/Application.vue').then(resolve),
    name: 'LayoutsApplication',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: (resolve) => import('@/views/Home.vue').then(resolve)
      },
      {
        path: '/about',
        name: 'About',
        component: (resolve) => import('@/views/About.vue').then(resolve)
      },
      {
        path: '/components',
        name: 'Components',
        component: (resolve) => import('@/views/Components.vue').then(resolve)
      },
      {
        path: '/boards',
        component: (resolve) => import('@/views/boards/Boards.vue').then(resolve),
        name: 'BoardsBoards'
      },
      {
        path: '/boards/:id',
        component: (resolve) => import('@/views/boards/Board.vue').then(resolve),
        name: 'BoardsBoard'
      }
    ]
  },
  {
    path: '/authentication',
    component: (resolve) => import('@/views/layouts/Authentication.vue').then(resolve),
    name: 'LayoutsAuthentication'
  },
  {
    path: '/base',
    component: (resolve) => import('@/views/layouts/Base.vue').then(resolve),
    name: 'LayoutsBase',
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: (resolve) => import('@/views/auth/Login.vue').then(resolve)
      },
      {
        path: '/register',
        name: 'Register',
        component: (resolve) => import('@/views/auth/Register.vue').then(resolve)
      }
    ]
  }
]

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // routes: paths.map(path => route(path.path, path.view, path.name)).concat([
  //   { path: '*', redirect: '/' }
  // ]),
  routes: customRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    if (store.getters['user/userLogin']) {
      next()
    } else {
      next('/login')
    }
  }
})

Vue.use(Meta)

export default router
