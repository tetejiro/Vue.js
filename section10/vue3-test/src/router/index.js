import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaybeChildren from '@/views/MaybeChildren'
import TeleportTest from '@/views/TeleportTest'
import CompositionTest from '@/views/CompositionTest'
import PropsEmitTest from '@/views/PropsEmitTest.vue'
import FunctionTest from '@/views/FunctionTest.vue'
import RouterTest from '@/views/RouterTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/children',
    name: 'MaybeChildren',
    component: MaybeChildren
  },
  {
    path: '/teleport',
    name: 'TeleportTest',
    component: TeleportTest
  },
  {
    path: '/Composition',
    name: 'CompositionTest',
    component: CompositionTest
  },
  {
    path: '/propsEmit',
    name: 'PropsEmitTest',
    component: PropsEmitTest
  },
  {
    path: '/function',
    name: 'FunctionTest',
    component: FunctionTest
  },
  {
    path: '/router',
    name: 'RouterTest',
    component: RouterTest
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
