import Vue from 'vue'
import VueRouter from 'vue-router'
import projects from '../views/Projects.vue'
import accountinfo from '../views/Accountinfo.vue'
import processtrack from '../views/Progresstrack.vue'
import order from '../views/Order.vue'
import updatepassword from '../components/accountviews/UpdatePassword.vue'
import updateemail from '../components/accountviews/UpdateEmail.vue'
import updateusername from '../components/accountviews/UpdateUsername.vue'
import updatewechat from '../components/accountviews/UpdateWechat.vue'
import adddata from '../views/AddData.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/adddata',
    name: 'adddata',
    component: adddata
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/accountinfo',
    component: accountinfo,
    children: [
      {
        path: '/updateusername',
        name: 'updateusername',
        component: updateusername
      },
      {
        path: '/updatewechat',
        name: 'updatewechat',
        component: updatewechat
      },
      {
        path: '/',
        name: 'updateemail',
        component: updateemail
      },
      {
        path: '/updatepassword',
        name: 'updatepassword',
        component: updatepassword
      },
      {
        path: '/updateemail',
        name: 'updateemail',
        component: updateemail
      }
    ]
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
