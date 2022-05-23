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
import feedback from '../views/Feedback.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/projects',
    name: 'projects',
    meta : {
      requireAuth: true, 
    },
    component: projects
  },
  {
    path: '/adddata',
    name: 'adddata',
    meta : {
      requireAuth: true, 
    },
    component: adddata
  },
  {
    path: '/',
    name: 'order',
    // 下面这个meta是重点，这里面配置requireAuth 为true，就是说必须登录的才能访问
    meta : {
      requireAuth: true, 
    },
    component: order
  },
  {
    path: '/accountinfo',
    component: accountinfo,
    children: [
      {
        path: '/updateusername',
        name: 'updateusername',
        meta : {
          requireAuth: true, 
        },
        component: updateusername
      },
      {
        path: '/updatewechat',
        name: 'updatewechat',
        meta : {
          requireAuth: true, 
        },
        component: updatewechat
      },
      {
        path: '/',
        name: 'updateemail',
        meta : {
          requireAuth: true, 
        },
        component: updateemail
      },
      {
        path: '/updatepassword',
        name: 'updatepassword',
        meta : {
          requireAuth: true, 
        },
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
    meta : {
      requireAuth: true, 
    },
    component: processtrack
  },
  {
    path: '/feedback',
    meta : {
      requireAuth: true, 
    },
    component: feedback,
  },
  {
    path: '/team',
    name: 'team',
    meta : {
      requireAuth: true, 
    },
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
