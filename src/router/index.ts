import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/ToDoList/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
