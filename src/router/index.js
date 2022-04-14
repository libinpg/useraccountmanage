import Vue from 'vue'
import VueRouter from 'vue-router'
import projects from '../views/Projects.vue'
import accountinfo from '../views/Accountinfo.vue'
import processtrack from '../views/Progresstrack.vue'
import order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'projects',
    component: projects
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/accountinfo',
    component: accountinfo
  },
  {
    path: '/progresstrack',
    component: processtrack
  },
  {
    path: '/team',
    name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
