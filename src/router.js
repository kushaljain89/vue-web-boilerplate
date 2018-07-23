import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import ApiDemo from './views/ApiDemo/ApiDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/api-demo',
      name: 'api-demo',
      component: ApiDemo
    }
  ]
})
