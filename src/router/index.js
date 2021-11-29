import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyFiles from '../views/MyFiles.vue'
import Favorites from '../views/Favorites.vue'
import Bin from '../views/Bin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myFiles',
    name: 'MyFiles',
    component: MyFiles
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/bin',
    name: 'Bin',
    component: Bin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
